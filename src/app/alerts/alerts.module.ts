import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertsComponent} from "./alerts.component";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: AlertsComponent}]),
    IonicModule,
  ]
})
export class AlertsModule {
}
