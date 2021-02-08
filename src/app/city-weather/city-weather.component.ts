import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '../city-search/city-weather';
import { CityWeatherInfoService } from '../city-search/city-weather-info.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  @Input() city: CityWeather;
  constructor(private cityWeatherInfo : CityWeatherInfoService) { }

  removeCity() {
    this.cityWeatherInfo.removeCity(this.city);
  }

  ngOnInit() {
  }

}
