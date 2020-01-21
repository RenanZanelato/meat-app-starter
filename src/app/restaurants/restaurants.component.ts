import { Component, OnInit } from '@angular/core';

import {RestaurantInterface} from './restaurant/restaurant.interface';
import {RestaurantsService} from './restaurants.service';
@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantInterface[];
  constructor(private restaurantsService: RestaurantsService) {

   }

  ngOnInit() {
    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
