import { Component, OnInit } from '@angular/core';
import { RadioOption } from './../shared/radio/radio-option.model';
import { OrderService } from './restaurant-order.service';
import { CartItem } from 'app/restaurant-detail/restaurant-cart/restaurant-cart-item.model';
import { Order, OrderItem } from './restaurant-order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-restaurant-order',
  templateUrl: './restaurant-order.component.html'
})
export class RestaurantOrderComponent implements OnInit {

  paymentOptions: RadioOption[] =[
    {label: 'Dinheiro',value: 1},
    {label: 'Cartao de Debito',value: 2},
    {label: 'Cartao de Crédito',value: 3},
    {label: 'Vale Refeição',value: 4},
  ]

  delivery: number = 8;

  constructor(private orderService: OrderService, private router: Router ) { }

  ngOnInit() {
  }
  itemsValue(): number{
    return this.orderService.itemsValue();
  }
  cartItems(): CartItem[]{
    return this.orderService.cartItems();
  }
  increaseQty(item: CartItem){
    return this.orderService.increaseQty(item);
  }
  decreaseQty(item: CartItem){
    return this.orderService.decreaseQty(item);
  }
  remove(item: CartItem){
    this.orderService.remove(item);
  }
  checkOrder(order: Order){
    order.orderItems = this.cartItems().map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order).subscribe( (orderId: string) => {
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    });
  }

}
