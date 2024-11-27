import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ToggleClasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    CanFlyPipe,
    NumbersPageComponent,
    OrderComponent,
    ToggleClasePipe,
    UncommonPageComponent,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
