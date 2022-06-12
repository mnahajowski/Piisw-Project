import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTicketFormComponent } from './single-ticket-form.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {SingleTicketType} from "../../models/single-ticket-type";

describe('SingleTicketFormComponent', () => {
  let component: SingleTicketFormComponent;
  let fixture: ComponentFixture<SingleTicketFormComponent>;
  let location: Location;
  let ticket: SingleTicketType;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTicketFormComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
    ticket = {type: ".SingleTicket", price: 100, discounted: true, validitySeconds: 300, name: "test3"};
  });

  beforeEach(() => {
    location = TestBed.inject(Location);
    spyOn(location, 'getState').and.returnValue(ticket);
    fixture = TestBed.createComponent(SingleTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
