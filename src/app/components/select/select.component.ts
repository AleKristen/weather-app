import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

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

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {

  }

  prueba(){
    console.log('funciona');

  }
  getWeather(cityName: string, countryCode: string) {
    this.weatherService
      .getWeather(cityName, countryCode)
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

  submitCity(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Por favor, ingrese los datos');
    }
    cityName.focus();
    return false;
  }

}
