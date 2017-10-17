import {MenuItem} from "./menuItem";
import {OrderItemSelectedOption} from "./order-item-selected-options";
import {MenuSundryOptions} from "./menu-sundry-options.model";

export interface OrderItem extends MenuItem {
  qty: number;
  selectedOptions: OrderItemSelectedOption[];
  options: MenuSundryOptions[];
  computeTotal(): number;
}
