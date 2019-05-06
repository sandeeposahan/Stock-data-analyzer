import { TestBed } from '@angular/core/testing';

import { ItradedataService } from './itradedata.service';

describe('ItradedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItradedataService = TestBed.get(ItradedataService);
    expect(service).toBeTruthy();
  });
});
