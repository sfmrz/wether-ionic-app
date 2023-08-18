import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WhetherApiService {

  private readonly lat = '53.3498';
  private readonly lon = '-6.266155';
  private readonly apiKey = '420c00f10da6bd23939158b3c7a6db2d';

  constructor(private httpClient: HttpClient) {
  }

  getWhetherDataForWeek(): Observable<LocationWeatherData> {
    const query = `https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly,alerts&appid=${this.apiKey}&units=metric`
    return this.httpClient.get(query) as Observable<LocationWeatherData>;
  }
  getWhetherDataForDay(): Observable<LocationWeatherData> {
    const query = `https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly,daily,alerts&appid=${this.apiKey}&units=metric`
    return this.httpClient.get(query) as Observable<LocationWeatherData>;
  }
  getWhetherAlerts():Observable<LocationWeatherData> {
    const query = `https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly,daily&appid=${this.apiKey}&units=metric`
    return this.httpClient.get(query) as Observable<LocationWeatherData>;
  }
}
