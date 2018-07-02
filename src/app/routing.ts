import {NgModule} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { ProductCreateComponent } from './product-create/productCreate.component';
import {ProductListComponent} from './product-list/productlist.component';
import {CheckoutComponent} from './checkout-page/checkout.component';

const appRoutes :Routes=[
  {path:'home',component:ProductCreateComponent},
  {path:'cart', component:CheckoutComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: ProductCreateComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
