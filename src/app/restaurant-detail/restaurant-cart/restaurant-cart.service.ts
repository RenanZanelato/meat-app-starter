import { CartItem } from "./restaurant-cart-item.model";
import { MenuItemInterface } from "../restaurant-menu-item/restaurant-menu-item.interface.component";

export class ShoppingCartService
{
  items: CartItem[] = [];
  clear(){
    this.items = [];
  }
  addItem(item:MenuItemInterface){
    let foundItem = this.items.find((mItem => mItem.menuItem.id === item.id));
    if(foundItem){
      this.increaseQty(foundItem);
      return true;
    }
    this.items.push(new CartItem(item));
    return true;
  }
  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item),1);
  }
  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev,value) => prev+value,0);
  }
  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1;
  }
  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1;
    if(item.quantity <= 0){
      this.removeItem(item);
    }
  } 
  
}