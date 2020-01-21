import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import {Observable} from 'rxjs/Observable'
import { MenuItemInterface } from '../restaurant-menu-item/restaurant-menu-item.interface.component';

@Component({
  selector: 'mt-restaurant-menu',
  templateUrl: './restaurant-menu.component.html'
})
export class RestaurantMenuComponent implements OnInit {
  menuItems: Observable<MenuItemInterface[]>;
  constructor(private restaurantsService: RestaurantsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.menuItems = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
