import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsComponent} from "./details.component";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DetailsComponent}]),
    IonicModule,
  ]
})
export class DetailsModule { }
