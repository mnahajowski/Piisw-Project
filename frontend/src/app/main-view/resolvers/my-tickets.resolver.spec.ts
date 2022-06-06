import { TestBed } from '@angular/core/testing';

import { MyTicketsResolver } from './my-tickets.resolver';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MyTicketsResolver', () => {
  let resolver: MyTicketsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]});
    resolver = TestBed.inject(MyTicketsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
