import { TestBed } from '@angular/core/testing';

import { SibblingService } from './sibbling.service';

describe('SibblingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SibblingService = TestBed.get(SibblingService);
    expect(service).toBeTruthy();
  });
});
