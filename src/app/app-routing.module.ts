import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './website/contact-us/contact-us.component';
import { LandingPageComponent } from './website/landing-page/landing-page.component';
import { ProductCartComponent } from './website/product/product-cart/product-cart.component';
import { ProductDetailComponent } from './website/product/product-detail/product-detail.component';
import { ProductComponent } from './website/product/product.component';
import { ServicePageComponent } from './website/service-page/service-page.component';
import { ToursimComponent } from './website/toursim/toursim.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'shop',component:ProductComponent},
  {path:'shop-detail',component:ProductDetailComponent},
  {path:'productCart',component:ProductCartComponent},
  {path:'service',component:ServicePageComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'tourism',component:ToursimComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
