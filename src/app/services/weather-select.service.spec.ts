import { TestBed } from '@angular/core/testing';

import { WeatherSelectService } from './weather-select.service';

describe('WeatherSelectService', () => {
  let service: WeatherSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
