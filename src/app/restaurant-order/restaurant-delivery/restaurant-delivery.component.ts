import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restaurant-delivery',
  templateUrl: './restaurant-delivery.component.html'
})
export class RestaurantDeliveryComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValue: number;
  constructor() { }

  ngOnInit() {
  }

  total(): number{
    return this.delivery + this.itemsValue;
  }

}
