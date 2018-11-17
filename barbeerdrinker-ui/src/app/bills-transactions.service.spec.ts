import { TestBed } from '@angular/core/testing';

import { BillsTransactionsService } from './bills-transactions.service';

describe('BillsTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillsTransactionsService = TestBed.get(BillsTransactionsService);
    expect(service).toBeTruthy();
  });
});
