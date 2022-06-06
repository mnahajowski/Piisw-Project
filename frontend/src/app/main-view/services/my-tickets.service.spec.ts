import { TestBed } from '@angular/core/testing';

import { MyTicketsService } from './my-tickets.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MyTicketsService', () => {
  let service: MyTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,]});
    service = TestBed.inject(MyTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
