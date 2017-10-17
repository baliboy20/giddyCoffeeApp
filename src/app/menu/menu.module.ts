import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {DataService} from "../gidderoo/data.service";
import {MaterialModule} from "../material/material.module";
import {RouterModule, Routes} from "@angular/router";
import {StepperModule} from "../components/stepper/stepper.module";
import {ComponentsModule} from "../components/components.module";

 const routesMenu: Routes = [
  {path: "", component: MenuComponent} ];


@NgModule({
  imports: [
    // CommonModule,
    MaterialModule, ComponentsModule,
    RouterModule.forChild(routesMenu)
  ],
  // exports: [MenuComponent],
  providers: [DataService],
  // declarations: [MenuComponent]
})
export class MenuModule { }
