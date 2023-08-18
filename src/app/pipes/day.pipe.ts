import { Pipe, PipeTransform } from '@angular/core';
import {DaysOfWeek} from "../models/days-names.constant";

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  private daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  transform(value: number, ...args: unknown[]): string {
    let date = new Date(+value * 1000);
    return this.daysOfWeek[date.getDay()];
  }

}
