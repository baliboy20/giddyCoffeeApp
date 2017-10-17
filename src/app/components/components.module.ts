import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperModule} from "./stepper/stepper.module";
import {ExpandablerModule} from "./expandabler/expandabler.module";
import {StepperComponent} from "./stepper/stepper.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
ExpandablerBodyComponent, ExpandablerComponent,
ExpandablerTitleComponent
} from "./expandabler/expandabler.component";

@NgModule({
  imports: [
    CommonModule, StepperModule, ExpandablerModule, BrowserAnimationsModule
  ],
  declarations: [
    // StepperComponent,
    // ExpandablerComponent
  ],
  exports: [
    StepperComponent,
    ExpandablerComponent,
    ExpandablerTitleComponent,
    ExpandablerBodyComponent]
})
export class ComponentsModule { }
