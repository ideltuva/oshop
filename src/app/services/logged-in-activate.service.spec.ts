import { TestBed } from '@angular/core/testing';

import { LoggedInActivateService } from './logged-in-activate.service';

describe('LoggedInActivateService', () => {
  let service: LoggedInActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
