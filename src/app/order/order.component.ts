import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {DataService} from "../gidderoo/data.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {OrderItem} from "../model/order-item.model";
import {Subject} from "rxjs/Subject";
import {OrderItemSelectedOption} from "../model/order-item-selected-options";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {OrderItemSelectedOptionImpl} from "../model/order-item-selected-options-impl";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {

  totalOrder : Subject<any>;
  menu = [];
  viewColapse = false;
  counter = 0;


  constructor(private srv: DataService,
              private router: Router,
  ) {

this.totalOrder  = this.srv.getCurrentOrder$();
    this.srv.createScratchOrder()
      .subscribe(a => {
        this.menu = (a);
        this.srv.computeOrderTotal1(this.menu);
      });
  }

  ngAfterViewChecked(ev) {


  }

  addItem(menuItem) {
    menuItem.selectedOptions.push( new OrderItemSelectedOptionImpl("", 0, 0));
  }

  delete(idx, item) {
    console.log('delted', idx);
    item.selectedOptions.splice(idx, 1);
    this.srv.computeOrderTotal1(this.menu);
  }

  ngOnChanges(changes) {

  }


  onChanged(ev, order: OrderItemSelectedOption) {
    console.log('things have changed ', ev, order);
    order.label = ev.sundryName;
    order.supplement = ev.sundryPrice;
    this.srv.computeOrderTotal1(this.menu);
  }

  onQtyChanged(qty, order: OrderItemSelectedOption) {
    order.qty = qty;
    console.log(qty,order);
    this.srv.computeOrderTotal1(this.menu);
  }


}
