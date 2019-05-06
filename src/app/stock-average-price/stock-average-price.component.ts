import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ItradedataService } from '../sevices/stock-price/itradedata.service';
import { Data50 } from '../models/data-50';
import { StockSymbol } from '../models/Symbol';

@Component({
  selector: 'app-stock-average-price',
  templateUrl: './stock-average-price.component.html',
  styleUrls: ['./stock-average-price.component.scss']
})
export class StockAveragePriceComponent implements OnInit {
  

  symbols: StockSymbol[] = (new Data50()).symbols;


  constructor(private itradeService : ItradedataService) {
    console.log("worked constructor");
    
    interval(5 * 1000)
    .pipe(
      map(() =>
        this.itradeService.getAllDelayQuotes(this.symbols)
      )
    )
    //this.itradeService.getAllDelayQuotes(this.symbols)
  }

  ngOnInit() {
    
  }


}
