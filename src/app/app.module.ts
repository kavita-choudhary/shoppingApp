import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { ProductCreateComponent } from './product-create/productCreate.component';
import {ProductListComponent} from './product-list/productlist.component';
import {CheckoutComponent} from './checkout-page/checkout.component';
import {FilterPipe} from './pipes/filter.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {DataService} from './services/dataService';
import {AppRoutingModule} from './routing';
@NgModule({
  imports:      [ BrowserModule , ReactiveFormsModule ,FormsModule ,AppRoutingModule],
  declarations: [ AppComponent,ProductCreateComponent,ProductListComponent,CheckoutComponent,FilterPipe,SortPipe ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
