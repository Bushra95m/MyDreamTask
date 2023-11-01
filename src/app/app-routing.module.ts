import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { NewlyAddedComponent } from './newly-added/newly-added.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { ShippingDeliveryComponent } from './shipping-delivery/shipping-delivery.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'mostView',component:MostViewedComponent},
  {path:'newlyAdd',component:NewlyAddedComponent},
  {path:'specialOffer',component:SpecialOffersComponent},
  {path:'bestSeller',component:BestSellersComponent},
  {path:'shipping',component:ShippingDeliveryComponent},
  {path:'mail',component:MailingListComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'cart',component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
