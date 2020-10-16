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

  selectedValue: any;
  weather;


  cities: City[] = [
    {cityName: 'Santiago', countryCode: 'Chile'},
    {cityName: 'Nueva York', countryCode: 'Estados Unidos'},
    {cityName: 'Caracas', countryCode: 'Venezuela'},
    {cityName: 'Buenos Aires', countryCode: 'Argentina'}
  ];

  constructor(private weatherSelectService: WeatherSelectService){

  }

  ngOnInit(): void {

  }

  getCity(cityName){
     console.log('Selectcomponent: selectedValue:',this.selectedValue)
     this.selectedValue = this.weatherSelectService.getWeather();
     console.log('cityName:',cityName)
  }

  // getCity(cities: any) {
  //   this.weatherSelectService
  //   .getWeather(cities.cityName)
  //   console.log('esto es:',cities.cityName)
  //  this.weatherSelectService
  //     .getWeather(selectedValue)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.weather = res;
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  submitCity(cityName: any) {
    if (cityName.value) {
      this.getCity(cityName.value);

    } else {
      alert('Por favor, ingrese los datos');
    }
    return false;
  }


}
