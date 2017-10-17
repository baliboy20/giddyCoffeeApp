import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GidderooComponent } from './gidderoo.component';
import {MaterialModule} from "../material/material.module";
import {DataService} from "./data.service";
import {FormsModule} from "@angular/forms";
import {StepperModule} from "../components/stepper/stepper.module";
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "../menu/menu.component";
import {OrderModule} from "../order/order.module";
import {OrderComponent} from "../order/order.component";
import {AuthService} from "../services/authorize/auth.service";
import {UserService} from "../services/authorize/user.service";
import {LoginComponent} from "../login/login.component";
import {LoginModule} from "../login/login.module";
import {RegisterComponent} from "../register/register.component";
import {RegisterModule} from "../register/register.module";


export const routes: Routes = [
  {path: "", redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu',  component: MenuComponent},
  // {path: 'menu',  loadChildren: 'app/menu/menu.module#MenuModule'},
  {path: 'order',  component: OrderComponent, canActivate: [AuthService]},
  {path: 'login',  component: LoginComponent},
  {path: 'register',  component: RegisterComponent},
];


@NgModule({
  imports: [
    // CommonModule,
    MaterialModule, FormsModule, StepperModule, OrderModule, LoginModule,
    RouterModule.forRoot(routes), RegisterModule
  ],
  declarations: [GidderooComponent, MenuComponent],
  exports: [GidderooComponent],
  providers: [DataService, AuthService, UserService]
})
export class GidderooModule { }
