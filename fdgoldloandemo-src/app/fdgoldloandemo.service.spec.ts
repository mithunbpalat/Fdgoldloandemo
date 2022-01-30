import { TestBed } from '@angular/core/testing';

import { FdgoldloandemoService } from './fdgoldloandemo.service';

describe('FdgoldloandemoService', () => {
  let service: FdgoldloandemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdgoldloandemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
