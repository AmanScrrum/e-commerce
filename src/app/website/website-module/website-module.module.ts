import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { NavBarComponent } from '../layout/nav-bar/nav-bar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductCartComponent } from '../product/product-cart/product-cart.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ServicePageComponent } from '../service-page/service-page.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ToursimComponent } from '../toursim/toursim.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    LandingPageComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductCartComponent,
    ServicePageComponent,
    ContactUsComponent,
    ToursimComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class WebsiteModuleModule { }
