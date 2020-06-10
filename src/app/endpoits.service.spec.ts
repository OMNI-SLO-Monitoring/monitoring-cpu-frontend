import { TestBed } from '@angular/core/testing';

import { EndpoitsService } from './endpoits.service';

describe('EndpoitsService', () => {
  let service: EndpoitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpoitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
