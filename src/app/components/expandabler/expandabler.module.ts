import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpandablerBodyComponent, ExpandablerComponent, ExpandablerTitleComponent} from './expandabler.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "../../material/material.module";
@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, NoopAnimationsModule, MaterialModule
  ],
  declarations: [ExpandablerComponent, ExpandablerBodyComponent, ExpandablerTitleComponent],
  exports: [ExpandablerComponent, ExpandablerBodyComponent, ExpandablerTitleComponent],
})
export class ExpandablerModule { }
