import {OrderItemSelectedOption} from "./order-item-selected-options";

export class  OrderItemSelectedOptionImpl implements  OrderItemSelectedOption
{
  label: string;
  supplement: number;
  qty: number;


  constructor(label: string, supplement: number, qty: number) {
    this.label = label;
    this.supplement = supplement;
    this.qty = qty;
  }
}
