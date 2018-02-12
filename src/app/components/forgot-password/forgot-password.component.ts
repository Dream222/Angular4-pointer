import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  private form   : FormGroup;
  private loading: boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loading = false;

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onClickSubmit(email: string): void {
    this.authService.forgotPassword(email);
  }

}
