import { Component, OnInit } from '@angular/core';
import {WeatherSelectService } from '../../services/weather-select.service';

interface City {
  cityName: string;
  countryCode: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selectedValue: string;
  weather;

  cities: City[] = [
    {cityName: 'Santiago', countryCode: 'Chile'},
    {cityName: 'Nueva York', countryCode: 'Estados Unidos'},
    {cityName: 'Caracas', countryCode: 'Venezuela'},
    {cityName: 'Buenos Aires', countryCode: 'Argentina'}
  ];

  constructor(private weatherSelectService: WeatherSelectService){}

  ngOnInit(): void {

  }

  // getCityCountry(){
  //    console.log(this.selectedValue)
  // }


  getCity(selectedValue) {
    this.weatherSelectService
      .getWeather(selectedValue)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitCity(selectedValue: HTMLSelectElement) {
    if (selectedValue.value) {
      this.getCity(selectedValue.value);

    } else {
      alert('Por favor, ingrese los datos');
    }
    return false;
  }

}
