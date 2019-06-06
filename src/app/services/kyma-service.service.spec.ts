import { TestBed } from '@angular/core/testing';

import { KymaService } from './kyma-service.service';

describe('KymaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KymaService = TestBed.get(KymaService);
    expect(service).toBeTruthy();
  });
});
