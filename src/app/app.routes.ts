import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantReviewsComponent } from './restaurant-detail/restaurant-reviews/restaurant-reviews.component';
export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'restaurants', component: RestaurantsComponent},
    {path:'restaurants/:id', component: RestaurantDetailComponent,
        children:[
            {path: '', redirectTo:'menu', pathMatch:'full'},
            {path: 'menu', component: RestaurantMenuComponent},
            {path: 'reviews', component: RestaurantReviewsComponent},
        ]
    },

];