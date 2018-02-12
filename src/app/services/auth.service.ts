import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
  Observable
} from 'rxjs/Observable';
import {
  of
} from 'rxjs/observable/of';
import {
  catchError,
  map,
  tap
} from 'rxjs/operators';
import {
  FacebookService,
  InitParams,
  LoginResponse as FBLoginResponse
} from 'ngx-facebook';
import {
  GoogleAuthService
} from 'ng-gapi';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {
  public id    : string;
  public token : string;
  public isLoggedIn: boolean;
  public fbData: FBLoginResponse;

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private fb: FacebookService,
    private googleAuth: GoogleAuthService
  ) {
    this.token = localStorage.getItem('token');

    if (this.token) this.isLoggedIn = true;
    else this.isLoggedIn = false;

    let initParams: InitParams = {
      appId: environment.FACEBOOK_APP_ID,
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  signin(email: string, password: string) {
    const url = `${this.apiUrl}user/login`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, { email, password }, httpOptions)
      .pipe(
        tap((res: { token: string }) => {
          const { token } = res;

          this.token = token;
          this.isLoggedIn = true;

          localStorage.setItem('token', token);

          return token;
        }),
        catchError((err: any) => Observable.throw({ status: err.status, ...err.error }))
      );
  }

  signout() {
    this.token = '';
    this.isLoggedIn = false;
    const url = `${this.apiUrl}user/logout`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.post(url, {}, httpOptions)
      .pipe(
        tap((res) => {
          return res;
        }),
        catchError((err: any) => Observable.throw({ status: err.status, ...err.error }))
      );
  }

  signup(email: string, password: string) {
    const url = `${this.apiUrl}user/signup`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, { email, password }, httpOptions)
      .pipe(
        tap((res: { id: string, token: string }) => {
          const { id, token } = res;
          this.id    = id;
          this.token = token;
          this.isLoggedIn = true;

          localStorage.setItem('token', token);

          return token;
        }),
        catchError((err: any) => Observable.throw({ status: err.status, ...err.error }))
      );
  }

  forgotPassword(email: string): void {
    console.log(email);
  }

  signupWithGoogle(): void {
    console.log('signup with google');
  }

  signupWithFB(): void {
    console.log('signup with facebook');
  }

  googleSignin(successHandler): any {
    return this.googleAuth.getAuth()
      .subscribe(
        (auth: any) => {
          return auth.signIn()
            .then((res: any) => successHandler(res))
            .catch((err: any) => console.error(err));
        }
      );
  }

  fbSignin(successHandler): void {
    this.fb.login()
      .then((response: FBLoginResponse) => successHandler(response))
      .catch((err: any) => console.error(err));
  }
}
