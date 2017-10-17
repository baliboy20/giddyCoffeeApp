import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import {MaterialModule} from "../../material/material.module";
import {CheckboxControlValueAccessor, ControlValueAccessor, FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule,
  ],
  declarations: [StepperComponent],
  exports: [StepperComponent],
})
export class StepperModule {}
