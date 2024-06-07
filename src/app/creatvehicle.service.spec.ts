import { TestBed } from '@angular/core/testing';

import { CreatvehicleService } from './creatvehicle.service';

describe('CreatvehicleService', () => {
  let service: CreatvehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatvehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
