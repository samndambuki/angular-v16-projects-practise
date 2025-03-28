import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  // { path: '', component: CartComponent }
  { path: '', component: CartDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
