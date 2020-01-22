import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent} from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantCartComponent } from './restaurant-detail/restaurant-cart/restaurant-cart.component';
import { RestaurantMenuItemComponent } from './restaurant-detail/restaurant-menu-item/restaurant-menu-item.component';
import { RestaurantReviewsComponent } from './restaurant-detail/restaurant-reviews/restaurant-reviews.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RestaurantOrderItemsComponent } from './restaurant-order/restaurant-order-items/restaurant-order-items.component';


import { RestaurantsService} from './restaurants/restaurants.service';
import { ShoppingCartService } from './restaurant-detail/restaurant-cart/restaurant-cart.service';
import { RestaurantOrderComponent } from './restaurant-order/restaurant-order.component';
import { OrderService } from './restaurant-order/restaurant-order.service';
import { RestaurantDeliveryComponent } from './restaurant-order/restaurant-delivery/restaurant-delivery.component';
import { RestaurantOrderSummaryComponent } from './restaurant-order-summary/restaurant-order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    RestaurantMenuComponent,
    RestaurantCartComponent,
    RestaurantMenuItemComponent,
    RestaurantReviewsComponent,
    RestaurantOrderComponent,
    InputComponent,
    RadioComponent,
    RestaurantOrderItemsComponent,
    RestaurantDeliveryComponent,
    RestaurantOrderSummaryComponent,
    RatingComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService,ShoppingCartService,OrderService,{provide: LOCALE_ID,useValue:'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
