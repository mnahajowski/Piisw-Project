import { TestBed } from '@angular/core/testing';

import { TicketListResolver } from './ticket-list.resolver';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TicketListResolver', () => {
  let resolver: TicketListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]});
    resolver = TestBed.inject(TicketListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
