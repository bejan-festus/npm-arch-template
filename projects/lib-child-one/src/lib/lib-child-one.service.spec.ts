import { TestBed } from '@angular/core/testing';

import { LibChildOneService } from './lib-child-one.service';

describe('LibChildOneService', () => {
  let service: LibChildOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibChildOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
