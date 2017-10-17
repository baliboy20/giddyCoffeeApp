import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {DataService} from "../gidderoo/data.service";
import {MaterialModule} from "../material/material.module";
// import {StepperModule} from "../components/stepper/stepper.module";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule, FormsModule,
    MaterialModule, ComponentsModule, BrowserAnimationsModule
  ],
  exports: [OrderComponent],
  providers: [DataService],
  declarations: [OrderComponent]
})
export class OrderModule { }
