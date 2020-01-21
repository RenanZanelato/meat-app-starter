import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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

import { RestaurantsService} from './restaurants/restaurants.service';
import { ShoppingCartService } from './restaurant-detail/restaurant-cart/restaurant-cart.service';




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
    RestaurantReviewsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
