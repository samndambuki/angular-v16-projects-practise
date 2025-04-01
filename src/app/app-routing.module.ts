import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoadGuard } from './adminload.guard';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
  },
  //admin module wont load unless guard allows it
  {
    path: 'admin',
    loadChildren: () =>
      import('./auth/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AdminLoadGuard],
  },
  { path: 'template', component: TemplateDrivenFormsComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
