import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { WatchingService } from "../../services/watching.service";
import { WatchingInfo } from "../../models/watching-info";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: "app-watching",
  templateUrl: "./watching.component.html",
  styleUrls: ["./watching.component.css"]
})

export class WatchingComponent implements OnInit {
  watching: Array<WatchingInfo> = [];
  lastWatching: Array<WatchingInfo> = [];
  constructor(
    private watchingService: WatchingService,
    private _formBuilder: FormBuilder,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.watchingService.getWatching().subscribe((res) => {
      if(res.docs.length > 0)
        this.watching = res.docs;
      console.log(this.watching)
    },
    (err)=> {
        
    });
  }

  backgroundImage(fileName: string): SafeStyle {
      if(fileName)
          return this._sanitizer.bypassSecurityTrustStyle(`url('${fileName}')`);
      else
          return '';
  }
}
