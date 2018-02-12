import { Component, OnInit, Input } from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "left-menu",
  templateUrl: "./left-menu.component.html",
  styleUrls: ["./left-menu.component.css"]
})

export class LeftMenuComponent implements OnInit {
  

  constructor(
    public _router: Router
  ) { 

  }

  ngOnInit() {
    
  }
}
