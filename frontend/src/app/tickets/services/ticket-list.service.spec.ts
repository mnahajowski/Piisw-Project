import { TestBed } from '@angular/core/testing';

import { TicketListService } from './ticket-list.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TicketListService', () => {
  let service: TicketListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]});
    service = TestBed.inject(TicketListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
