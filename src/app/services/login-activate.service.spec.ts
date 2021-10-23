import { TestBed } from '@angular/core/testing';

import { LoginActivateService } from './login-activate.service';

describe('LoginActivate', () => {
  let service: LoginActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
