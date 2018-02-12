import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { UserInfo, UserServiceInfo } from "../../models/user-info";
import * as lodash from 'lodash';

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})

export class UserProfileComponent implements OnInit {
  user: UserInfo = new UserInfo();
  _userServices: Array<UserServiceInfo> = [];

  constructor(
    private userService: UserService,
    private _formBuilder: FormBuilder,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
      this.userService.getUser().subscribe((res)=> {
        console.log(res);
        this.user = res.user;
      },
      (err) => {

      });

      this.userService.getServices().subscribe((res)=> {
        console.log(res);
        res.docs.forEach(e => {
          this._userServices.push(lodash.merge(new UserServiceInfo(), e));
        });
        console.log(this._userServices)
      },
      (err) => {

      });
  }

  backgroundImage(fileName: string): SafeStyle {
    if(fileName)
        return this._sanitizer.bypassSecurityTrustStyle(`url('${fileName}')`);
    else
        return '';
  }
}
