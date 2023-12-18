import { TestBed } from '@angular/core/testing';

import { BuyerDetailsService } from './buyer-details.service';

describe('BuyerDetailsService', () => {
  let service: BuyerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
