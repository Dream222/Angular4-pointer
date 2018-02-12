import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { LikeService } from "../../services/like.service";
import { WatchingInfo } from "../../models/watching-info";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"]
})

export class LikeComponent implements OnInit {
  like: Array<WatchingInfo> = [];
  lastlike: Array<WatchingInfo> = [];
  constructor(
    private likeService: LikeService,
    private _formBuilder: FormBuilder,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.likeService.getLike().subscribe((res) => {
      if(res.docs.length > 0)
        this.like = res.docs;
      console.log(this.like)
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
