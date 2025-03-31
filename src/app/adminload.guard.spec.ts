import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminloadGuard } from './adminload.guard';

describe('adminloadGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminloadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
