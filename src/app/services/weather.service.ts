import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  apiKey = 'd046421e3b82da4668373a672038f225';
  URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=`
   }

   getWeather(cityName: string, countryCode: string){
    return this.http.get(`${this.URL}${cityName},${countryCode}`)
   }
}
