import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { DelayQuote } from 'src/app/models/delay-quote';
import { map, flatMap } from 'rxjs/operators';
import { StockSymbol } from 'src/app/models/Symbol';

@Injectable({
  providedIn: 'root'
})
export class ItradedataService {

  readonly stock_service = "../../stock/";
  readonly delay_quote = "/delayed-quote"
  

  constructor(private httpsClient : HttpClient) { }

  public getDelayQuoteBySymbol(symbol: string): Observable<DelayQuote> {
    
    return this.httpsClient.get(this.stock_service + symbol + this.delay_quote).pipe(
      map((res: any) => {return res;})
    ) as Observable<DelayQuote>

  }

  public getAllDelayQuotes(symbols: StockSymbol[]) {
    let delayQuote: any[] = [];
    
    symbols.forEach(element => {
      delayQuote.push(this.getDelayQuoteBySymbol(element.tckName))
    });
    forkJoin(delayQuote).subscribe(
      res => console.log(res)
    )
  }

}
