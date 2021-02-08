import { TestBed } from '@angular/core/testing';

import { CityWeatherInfoService } from './city-weather-info.service';

describe('CityWeatherInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityWeatherInfoService = TestBed.get(CityWeatherInfoService);
    expect(service).toBeTruthy();
  });
});
