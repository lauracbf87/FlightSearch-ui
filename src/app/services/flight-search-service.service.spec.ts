import { TestBed } from '@angular/core/testing';

import { FlightSearchServiceService } from './flight-search-service.service';

describe('FlightSearchServiceService', () => {
  let service: FlightSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
