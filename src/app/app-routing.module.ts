import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockAveragePriceComponent } from './stock-average-price/stock-average-price.component';

const routes: Routes = [
  {path: '', component: StockAveragePriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
