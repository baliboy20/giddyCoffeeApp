import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {DataService} from "../gidderoo/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menu = [];
  constructor( private srv: DataService, private router: Router) {
    this.srv.listMenuItems()
      .map(a => { return { name: a.name, price: a.price, options: a.options, numSelected: 0}; })
      // .do(console.log)
      .subscribe(a => this.menu.push(a) );
  }
  orderDrinks() {
    this.router.navigate(['order']);
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
