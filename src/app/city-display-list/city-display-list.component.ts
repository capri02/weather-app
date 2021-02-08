import { Component, Input, OnInit } from '@angular/core';
import { CityWeatherInfoService } from '../city-search/city-weather-info.service';

@Component({
  selector: 'app-city-display-list',
  templateUrl: './city-display-list.component.html',
  styleUrls: ['./city-display-list.component.css']
})
export class CityDisplayListComponent implements OnInit {

  constructor() { }

  @Input() 
  cityWeatherData: CityWeatherInfoService[];

  ngOnInit() {
    
  }

}
