import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';


import {GidderooModule} from "./gidderoo/gidderoo.module";

import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    // RouterModule
  ],
  imports: [
    BrowserAnimationsModule,
    // BrowserModule,
    FormsModule,
    HttpModule,

    GidderooModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
