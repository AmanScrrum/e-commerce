import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteModuleModule } from './website/website-module/website-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
