import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherSelectService {

  apiKey = 'd046421e3b82da4668373a672038f225';
  URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=`
   }

   getWeather(selectedCity: any){
    return this.http.get(`${this.URL}${selectedCity} `)
   }
}
