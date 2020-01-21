import { MenuItemInterface } from "../restaurant-menu-item/restaurant-menu-item.interface.component";

export class CartItem{
  constructor(public menuItem: MenuItemInterface, public quantity:number = 1){}

  value():number{
    return this.menuItem .price * this.quantity;
  }
}