import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { NewlyAddedComponent } from './newly-added/newly-added.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { ShippingDeliveryComponent } from './shipping-delivery/shipping-delivery.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BestSellersComponent,
    NewlyAddedComponent,
    SpecialOffersComponent,
    MostViewedComponent,
    AboutUsComponent,
    ContactUsComponent,
    MailingListComponent,
    ShippingDeliveryComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FormsModule,
 
 ReactiveFormsModule,

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
