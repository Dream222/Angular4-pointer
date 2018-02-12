import { Component, OnInit } from "@angular/core";
import { SellInfo } from "../../models/sell-info";
import { SellService } from "../../services/sell.service";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})

export class OrdersComponent implements OnInit {
  buyers: Array<SellInfo> = [];
  constructor(
    private sellService: SellService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.sellService.getBuyers().subscribe((res) => {
      if(res.docs.length > 0)
        this.buyers = res.docs;
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

