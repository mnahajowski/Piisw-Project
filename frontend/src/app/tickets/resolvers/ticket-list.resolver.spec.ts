import { TestBed } from '@angular/core/testing';

import { TicketListResolver } from './ticket-list.resolver';

describe('TicketListResolver', () => {
  let resolver: TicketListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TicketListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
