import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityWeather } from './city-weather';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherInfoService {
  private API: string = "http://api.weatherstack.com/current";
  private API_KEY: string = "1724015a238c58942580bee0f31db1c8";
  private cityListJson = './cities/citylist2.json';
  citiesWeather: CityWeather[];

  constructor(private http: HttpClient) {
    this.citiesWeather = [];
  }

  subscribeToWeatherInfo(searchCity: string) {
    this.http.get(`${this.API}?access_key=${this.API_KEY}&query=${searchCity}`)
      .subscribe(data => {
        this.addCityWeatherInfo(this.getWeatherSpecificData(data));
      })
  }

  addCityWeatherInfo(city: CityWeather) {
    if (!this.hasCity(city)) {
      this.citiesWeather.push(city);
    }
  }

  removeCity(city: CityWeather) {
    const index = this.indexOf(city);
    this.citiesWeather.splice(index, 1);
  }

  hasCity(city: CityWeather): boolean {
    return this.indexOf(city) !== -1;
  }

  indexOf(city: CityWeather): number {
    for (let i = 0; i < this.citiesWeather.length; i++) {
      if (this.citiesWeather[i].name === city.name) {
        return i;
      }
    }
    return -1;
  }

  getWeatherSpecificData(item: any): CityWeather {
    return new CityWeather(
      item.location.name,
      item.location.country,
      item.current.temperature,
      item.current.weather_code
    );
  }
}
