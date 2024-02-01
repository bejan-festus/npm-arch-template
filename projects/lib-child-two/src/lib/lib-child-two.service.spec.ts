import { TestBed } from '@angular/core/testing';

import { LibChildTwoService } from './lib-child-two.service';

describe('LibChildTwoService', () => {
  let service: LibChildTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibChildTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
