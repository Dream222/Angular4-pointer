import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../services/auth.service';

import { AuthType } from './../../constants/auth-type.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private form0     : FormGroup;
  private form1     : FormGroup;
  private authType  : number;
  private step      : number;
  private email     : string;
  private password  : string;
  private firstName : string;
  private lastName  : string;
  private loading   : boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.successSignupWithFB     = this.successSignupWithFB.bind(this);
    this.successSignupWithGoogle = this.successSignupWithGoogle.bind(this);
  }

  ngOnInit() {
    this.loading = false;
    this.step    = 0;

    this.form0 = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });

    this.form1 = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
  }

  goBack(): void {
    this.step = 0;
  }

  goNext():void {
    this.step = 1;
  }

  onClickBack(): void {
    this.goBack();
  }

  onClickContinue(email, password): void {
    this.email    = email;
    this.password = password;
    this.authType = AuthType.Email;

    this.goNext();
  }

  onClickSignup(firstName, lastName): void {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.loading   = true;

    const {
      email,
      password
    } = this;

    let promise = null;

    switch (this.authType) {
      case AuthType.Email:
        promise = this.authService.signup(email, password);
        break;

      case AuthType.Google:
        promise = this.authService.signupWithGoogle();
        break;

      case AuthType.Facebook:
        promise = this.authService.signupWithFB();
        break;

      default:
        promise = this.authService.signup(email, password);
        break;
    }

    promise
      .subscribe(
        (res: any) => {
          this.loading = false;
        },
        (err: any) => {
          this.loading = false;
          console.log(err);
        }
      );
  }

  onClickSignupWithGoogle(): void {
    this.authType = AuthType.Google;
    this.authService.googleSignin(this.successSignupWithGoogle);
  }

  onClickSignupWithFB(): void {
    this.authType = AuthType.Facebook;
    this.authService.fbSignin(this.successSignupWithFB);
  }

  successSignupWithGoogle(data: any): void {
    console.log(data);
    this.goNext();
  }

  successSignupWithFB(data: any): void {
    console.log(data);
    this.goNext();
  }

}
