import { StockSymbol } from './Symbol';
import { Output } from '@angular/core';

export class Data50 {
    @Output()
    symbols: StockSymbol[] = [
        {
            tckName : "aapl",
            fullName : "Apple"
        },
        {
            tckName : "goog",
            fullName : "Google"
        }

    ]
}