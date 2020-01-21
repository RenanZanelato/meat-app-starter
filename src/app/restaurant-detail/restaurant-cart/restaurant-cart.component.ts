import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './restaurant-cart.service';

@Component({
  selector: 'mt-restaurant-cart',
  templateUrl: './restaurant-cart.component.html'
})
export class RestaurantCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }
  items():any[]{
    return this.shoppingCartService.items;
  }
  total():number{
    return this.shoppingCartService.total();
  }
  clear(){
    this.shoppingCartService.clear();
  }
  removeItem(item: any){
    console.log(item)
   this.shoppingCartService.removeItem(item)
  }
  addItem(item: any){
    this.shoppingCartService.addItem(item);
  }

}
