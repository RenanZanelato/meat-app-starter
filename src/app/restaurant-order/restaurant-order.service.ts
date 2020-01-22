import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/restaurant-cart/restaurant-cart.service";
import { CartItem } from "app/restaurant-detail/restaurant-cart/restaurant-cart-item.model";
import { Order } from "./restaurant-order.model";

import {MEAT_API} from '../app.api';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class OrderService{
  constructor(private cartService: ShoppingCartService,private http: Http){}

  cartItems(): CartItem[]{
    return this.cartService.items;
  }
  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.cartService.removeItem(item);
  }
  itemsValue(): number{
    return this.cartService.total();
  }
  checkOrder(order: Order): Observable<string>{
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    let response = this.http.post(`${MEAT_API}/orders`,JSON.stringify(order),new RequestOptions({headers: headers}))
                            .map(response => response.json())
                            .map(order => order.id)
                            ;

    return response;
  }
  clear(){
    this.cartService.clear();
  }
}