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

import { AuthService } from './auth.service';
import { ChatUser } from './../interfaces/chat-user';
import { Paginated } from './../interfaces/paginated';
import { environment } from './../../environments/environment';

@Injectable()
export class ConversationService {
  private apiUrl = environment.apiUrl;

  public conversations: Paginated;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  get() {
    const url = `${this.apiUrl}conversations`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.token}`
      })
    };
    return this.http.get(url, httpOptions)
      .pipe(
        tap((res: Paginated) => {
          this.conversations = res;
          return res;
        }),
        catchError((err: any) => Observable.throw({ status: err.status, ...err.error }))
      );
  }

}
