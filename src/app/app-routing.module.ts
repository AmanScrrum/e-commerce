import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './website/landing-page/landing-page.component';
import { ProductDetailComponent } from './website/product/product-detail/product-detail.component';
import { ProductComponent } from './website/product/product.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'shop',component:ProductComponent},
  {path:'shop-detail',component:ProductDetailComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
