import {Component, OnInit} from '@angular/core';
import {WhetherApiService} from "../services/whether-api.service";
import {DaysOfWeek} from "../models/days-names.constant";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public data: LocationWeatherData | null = null;
  public daysOfWeek: string[] = Object.values(DaysOfWeek);
  public isLoading: boolean = true;

  constructor(private whetherApiService: WhetherApiService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  timestampToHuman(timestamp: number, offset: number, isDay?: boolean) {
    return new Date((timestamp + offset) * 1000).toISOString();
  }

  refreshData(event: any): void {
    this.loadData(event);
  }

  private loadData(event?: any): void {
    this.isLoading = true;

    this.whetherApiService.getWhetherDataForWeek().subscribe({
      next: apiData => {
        this.data = apiData;
        this.isLoading = false;

        if (event) {
          event.target.complete();
        }

        console.log('Data updated');
      },
      error: error => {
        console.error('Error fetching weather data:', error);
        this.isLoading = false;

        if (event) {
          event.target.complete();
        }
      }
    });
  }

}
