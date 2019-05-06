import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockAveragePriceComponent } from './stock-average-price/stock-average-price.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    StockAveragePriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
