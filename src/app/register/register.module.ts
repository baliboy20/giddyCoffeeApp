import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule,
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class RegisterModule { }
