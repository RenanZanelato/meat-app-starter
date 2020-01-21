import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import {MenuItemInterface} from "./restaurant-menu-item.interface.component";

@Component({
  selector: 'mt-restaurant-menu-item',
  templateUrl: './restaurant-menu-item.component.html'
})
export class RestaurantMenuItemComponent implements OnInit {

  @Input() menuItem: MenuItemInterface
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitAddEvent(){
    this.add.emit(this.menuItem);
  }

}
