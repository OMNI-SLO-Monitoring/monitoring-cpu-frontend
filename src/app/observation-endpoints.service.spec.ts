import { TestBed } from '@angular/core/testing';

import { ObservationEndpointsService } from './observation-endpoints.service';

describe('ObservationEndpointsService', () => {
  let service: ObservationEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservationEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
