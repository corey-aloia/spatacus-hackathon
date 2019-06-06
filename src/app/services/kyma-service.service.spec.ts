import { TestBed } from '@angular/core/testing';

import { KymaServiceService } from './kyma-service.service';

describe('KymaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KymaServiceService = TestBed.get(KymaServiceService);
    expect(service).toBeTruthy();
  });
});
