import {MenuItem} from "./menuItem";
import {OrderItem} from "./order-item.model";
import {MenuItemImpl} from "./menu-item.model";
import {OrderItemSelectedOption} from "./order-item-selected-options";
import {OrderItemSelectedOptionImpl} from "./order-item-selected-options-impl";
import {MenuSundryOptions} from "./menu-sundry-options.model";


export class OrderItemImpl extends MenuItemImpl implements OrderItem{
  qty: number= 0;
  selectedOptions: OrderItemSelectedOption[];
  options: MenuSundryOptions[];

  constructor(itm: MenuItem) {
    super(itm.options, itm.info, itm.name, itm.price, itm.foodType)
    {
      this.qty = 0;
      this.name = itm.name;
      this.options = itm.options;
      this.selectedOptions =
      itm.options.map( a=> {
        return new OrderItemSelectedOptionImpl(a.sundryName, a.sundryPrice, 0);
      })
    }
  }

  computeTotal(): number {
   const retval = this.selectedOptions.reduce((a, b) => {
      a += (this.price + b.supplement) * b.qty;
      console.log('compute total', this.price, b.supplement, b.qty, a);
      return Math.trunc(a*100) /100;
    }, 0);
     return retval;
  }

}



