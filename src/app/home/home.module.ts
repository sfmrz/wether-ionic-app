import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {DayPipe} from "../pipes/day.pipe";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([{path: '', component: HomePage}]),
  ],
  declarations: [HomePage, DayPipe],
  exports: [
    DayPipe
  ]
})
export class HomePageModule {
}
