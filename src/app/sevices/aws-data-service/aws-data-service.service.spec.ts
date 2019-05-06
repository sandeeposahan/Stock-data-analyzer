import { TestBed } from '@angular/core/testing';

import { AwsDataServiceService } from './aws-data-service.service';

describe('AwsDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsDataServiceService = TestBed.get(AwsDataServiceService);
    expect(service).toBeTruthy();
  });
});
