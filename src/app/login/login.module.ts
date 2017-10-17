import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {DataService} from "../gidderoo/data.service";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {StepperModule} from "../components/stepper/stepper.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule, RouterModule, FormsModule, StepperModule
  ],
  exports: [LoginComponent],
  providers: [DataService],
  declarations: [LoginComponent]
})
export class LoginModule { }
