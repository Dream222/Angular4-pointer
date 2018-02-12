import { Component, OnInit } from "@angular/core";
import { BuyInfo } from "../../models/buy-info";
import { BuyService } from "../../services/buy.service";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Component({
  selector: "app-buy-sell",
  templateUrl: "./buy-sell.component.html",
  styleUrls: ["./buy-sell.component.css"]
})

export class BuySellComponent implements OnInit {
  sellers: Array<BuyInfo> = [];
  constructor(
    private buyService: BuyService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.buyService.getSellers().subscribe((res) => {
      if(res.docs.length > 0)
        this.sellers = res.docs;
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

