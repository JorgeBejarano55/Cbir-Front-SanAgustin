import { TestBed } from '@angular/core/testing';

import { CbirService } from './cbir.service';

describe('CbirService', () => {
  let service: CbirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
