import { TestBed } from '@angular/core/testing';

import { WetherDataService } from './wether-data.service';

describe('WetherDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WetherDataService = TestBed.get(WetherDataService);
    expect(service).toBeTruthy();
  });
});
