import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/reduce';

import {MenuItem} from "../model/menuItem";
import {MenuItemImpl} from "../model/menu-item.model";
import {OrderItem} from "../model/order-item.model";
import {MenuSundryOptions} from "../model/menu-sundry-options.model";
import {OrderItemImpl} from "../model/order-item-impl.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

export interface MenuItems {
  name: string;
  price: number;
  options: { optionName: string, price: number }[];
}

export interface SelectedOptions {
  selectedOptions: {
    orderItem: string,
    qty: number,
    price: number,
    instructions: string
  };
}


@Injectable()
export class DataService {

  milks: MenuSundryOptions[] = [
    {sundryName: 'full', sundryPrice: .40},
    {sundryName: 'skinny', sundryPrice: .7},
    {sundryName: 'almond', sundryPrice: .8},
    {sundryName: 'soya', sundryPrice: .86},
    {sundryName: 'none', sundryPrice: .25},
  ];

  constructor() {
  }

  listMenuItems(): Observable<MenuItem> {
    return Observable.from([
      {name: 'Flat White', price: 2.45, foodType: 'beverage', options: [...this.milks]},
      {name: 'Cappucino', price: 3.00, foodType: 'beverage', options: [...this.milks]},
      {name: 'Latte', price: 3.00, foodType: 'beverage', options: [...this.milks]},
      {name: 'Tall Latte', price: 3.00, foodType: 'beverage', options: [...this.milks]},
      {name: 'Espresso', price: 3.00, foodType: 'beverage', options: [...this.milks]},
      {name: 'Giddy Special', price: 3.00, foodType: 'beverage', options: [...this.milks]},
    ])
      .map(a => {
        return new MenuItemImpl(a.options, "", a.name, a.price, a.foodType);
      });
  }

  createScratchOrder() {

    return this.listMenuItems()
      .map((a: MenuItem) => {
        const c: OrderItemImpl = new OrderItemImpl(a);
        /// // const b: OrderItem = new OrderItemImpl(a);
        return c;
      })
      // .do(console.log)
      .map(mnu => {
        if (mnu.name === "Flat White") {
          mnu.selectedOptions = [
            {label: "skinny", supplement: .25, qty: 1},
            {label: "full", supplement: .5, qty: 2},

          ];
        } else {
          mnu.selectedOptions = [];
        }
        return mnu;
      })
      .toArray()
  }

  // composeOrder(menu: any) {
  //
  //   return Observable.from(menu)
  //     .filter(a => {
  //       return a['selectedOptions'].length > 0;
  //     })
  //     .flatMap(a => {
  //       const res = {product: a["name"], sundryPrice: a["sundryPrice"], totalAmount: 0, items: []};
  //       return Observable.from(a['selectedOptions'])
  //         .reduce((acc, curr) => {
  //           curr['product'] = res['product'];
  //           curr['option'] = curr['name'];
  //           delete curr['name'];
  //           acc['items'].push(curr);
  //           //console.log(acc['total'], curr['sundryPrice'], a['sundryPrice'], curr['qty']);
  //           acc['totalAmount'] += ( curr['sundryPrice'] + a['sundryPrice'] ) * curr['qty']
  //           return res;
  //         }, res);
  //     })
  //     .reduce((a, b) => {
  //       a['grandTotal'] += b['totalAmount'];
  //       (a['items'] as Array<any>).push(...b['items']);
  //       return a;
  //     }, {grandTotal: 0, items: []});
  // }

currentOrder: Subject<number> = new BehaviorSubject(0);

  getCurrentOrder$(): Subject<number> {return  this.currentOrder; }

  computeOrderTotal(itms: OrderItemImpl[]) {
    return Observable.from(itms)
      .filter((itm: OrderItemImpl) => itm.selectedOptions.length > 0)
      .reduce((a: number, b: OrderItem) => {
       // console.log('XXXXX compute..', b.computeTotal(), b)
        a += b.computeTotal();
        return a;
      }, 0)
  }

  computeOrderTotal1(itms: OrderItemImpl[]) {
      Observable.from(itms)
      .filter((itm: OrderItemImpl) => itm.selectedOptions.length > 0)
      .reduce((a: number, b: OrderItem) => {
        // console.log('XXXXX compute..', b.computeTotal(), b)
        a += b.computeTotal();
        return a;
      }, 0).subscribe(a => this.currentOrder.next(a));

  }
}

/*
{name: total}

 */
