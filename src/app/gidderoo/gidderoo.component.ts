import {Component, OnInit} from '@angular/core';
import {MatDialog, MatMenu} from "@angular/material";
import {DataService} from "./data.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-gidderoo',
  templateUrl: './gidderoo.component.html',
  styleUrls: ['./gidderoo.component.scss']
})
export class GidderooComponent implements OnInit {

  menu = [];


  totalOrder: Subject<any>;


  constructor(private dialog: MatDialog, private srv: DataService, private router: Router) {
    this.totalOrder = this.srv.getCurrentOrder$();
  }

  ngOnInit() {
  }

  clickRegister() {
    this.router.navigate(['register']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
