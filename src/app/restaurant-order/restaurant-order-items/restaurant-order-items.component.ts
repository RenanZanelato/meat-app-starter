import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/restaurant-cart/restaurant-cart-item.model';

@Component({
  selector: 'mt-restaurant-order-items',
  templateUrl: './restaurant-order-items.component.html'
})
export class RestaurantOrderItemsComponent implements OnInit {

  @Input() items: CartItem[];
  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();
  constructor() { }

  ngOnInit() {
  }
  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item);
  }
  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item);
  }
  emitRemove(item: CartItem){
    this.remove.emit(item);
  }
  

}
