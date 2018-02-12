import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('myModal') myModal:ElementRef;
  private form   : FormGroup;
  private loading: boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private _router: Router    
  ) {
    this.successSigninWithFB = this.successSigninWithFB.bind(this);
    this.successSigninWithGoogle = this.successSigninWithGoogle.bind(this);
  }

  ngOnInit() {
    this.loading = false;

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onClickSignin(email: string, password: string): void {
    this.authService.signin(email, password)
      .subscribe(
        (res) => {
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          console.log(err);
        }
      );
  }

  onClickSigninWithGoogle(): void {
    this.authService.googleSignin(this.successSigninWithGoogle);
  }

  onClickSigninWithFB(): void {
    this.authService.fbSignin(this.successSigninWithFB);
  }

  successSigninWithGoogle(data: any): void {
    console.log(data);
  }

  successSigninWithFB(data: any): void {
    console.log(data);
  }
}
