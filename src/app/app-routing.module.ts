import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'products', component: ProductsComponent
  },
  {
    path:'product-details', component: ProduitDetailsComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'orders', component: OrderComponent
  },

  //  ici c'est la route qui sera selectionner par defaut
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'**', component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
