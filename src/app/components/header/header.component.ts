import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn : boolean = false;
  public showSearchLocations: boolean = false;
  public showSearchSuggestions: boolean = false;
  public showSearchTyping: boolean = false;
  public toggleMN: boolean = false;
  public searchForm : FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.showSearchLocations = false;
    this.showSearchSuggestions = false;
    this.showSearchTyping = false;
    
    this.searchForm = this.formBuilder.group({
      search: [null, Validators.required]
    });

    
  }

  onClickLocation(): void {
    this.showSearchLocations = true;
    console.log($("#modal_signin"))
    $("#modal_signin").modal('toggle');
  }

  onBlurLocation(): void {
    this.showSearchLocations = false;
  }

  onClickSearch(): void {
    this.showSearchSuggestions = true;
    this.showSearchLocations = false;
  }

  onBlurSearch(): void {
    this.showSearchSuggestions = false;
    this.showSearchTyping = false;
  }

  handleKeyupSearch(event: any): void {
    console.log(event.target.value);
    this.showSearchSuggestions = false;
    this.showSearchTyping = true;
  }

}
