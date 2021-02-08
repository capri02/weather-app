import { Component, OnInit } from '@angular/core';
import { CityWeatherInfoService } from './city-weather-info.service';
import { ICity } from './cities';
import { CitySearchService } from './city-search.service';
import { CityWeather } from './city-weather';

@Component({
  selector: 'app-weather',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  constructor(private citySearchService: CitySearchService, private cityWeatherInfo: CityWeatherInfoService) { }

  errorMessage: string = '';
  searchedCity: string = '';

  get filterCity(): string {
    return this.searchedCity;
  }

  set filterCity(searchedValue: string) {
    if (searchedValue.length > 2) {
      this.searchedCity = searchedValue;
      this.filteredCity = this.performFilter(this.searchedCity);
    }
  }

  filteredCity: ICity[];
  cities: ICity[] = [];

  performFilter(filterBy: string): ICity[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cities.filter((city: ICity) =>
      city.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onCitySelect(event: any) {
    const cityName = event.target.innerHTML || '';
    this.searchedCity = cityName;
    this.filteredCity = [];
  }

  SearchWeatherData() {
    if (this.searchedCity.length > 2) {
      this.cityWeatherInfo.subscribeToWeatherInfo(this.searchedCity);
    }
  }

  ngOnInit() {
    this.citySearchService.getCities().subscribe({
      next: cities => {
        this.cities = cities;
      },
      error: err => this.errorMessage = err
    });
  }
}
