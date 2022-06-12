import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListComponent } from './ticket-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {LongTimeTicketType} from "../../models/long-time-ticket-type";

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;
  let ticket1: LongTimeTicketType;
  let ticket2: LongTimeTicketType;

  beforeEach(async () => {
    ticket1 = {type: ".LongTimeTicket", price: 100, discounted: true, validitySeconds: 300, name: "test2"};
    ticket2 = {type: ".LongTimeTicket", price: 100, discounted: true, validitySeconds: 300, name: "test2"};
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ TicketListComponent ],
      providers:
        [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                paramMap: {
                  get:() => [ticket1, ticket2]
                }
              }
            }
          }
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
