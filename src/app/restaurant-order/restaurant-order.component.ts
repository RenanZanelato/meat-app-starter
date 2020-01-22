import { Component, OnInit } from '@angular/core';
import { RadioOption } from './../shared/radio/radio-option.model';
import { OrderService } from './restaurant-order.service';
import { CartItem } from 'app/restaurant-detail/restaurant-cart/restaurant-cart-item.model';
import { Order, OrderItem } from './restaurant-order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'mt-restaurant-order',
  templateUrl: './restaurant-order.component.html'
})
export class RestaurantOrderComponent implements OnInit {

  orderForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern= /^[0-9]*$/;

  paymentOptions: RadioOption[] =[
    {label: 'Dinheiro',value: 1},
    {label: 'Cartao de Debito',value: 2},
    {label: 'Cartao de Crédito',value: 3},
    {label: 'Vale Refeição',value: 4},
  ]

  delivery: number = 8;

  constructor(private orderService: OrderService, private router: Router,private formBuilder: FormBuilder ) { }

  ngOnInit() {
    
    this.orderForm = this.formBuilder.group({
      name:this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required,Validators.minLength(5),Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('',[Validators.required,Validators.minLength(5),Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('',[Validators.required,Validators.minLength(5),Validators.pattern(this.numberPattern)]),
      number:this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
      complement:this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[Validators.required])
    },{validator: RestaurantOrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if(!email || !emailConfirmation){
      return undefined;
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true};
    }
    return undefined;
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
