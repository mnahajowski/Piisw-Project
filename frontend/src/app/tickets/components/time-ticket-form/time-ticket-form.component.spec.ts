import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTicketFormComponent } from './time-ticket-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {TimeTicketType} from "../../models/time-ticket-type";

describe('TimeTicketFormComponent', () => {
  let component: TimeTicketFormComponent;
  let fixture: ComponentFixture<TimeTicketFormComponent>;
  let location: Location;
  let ticket: TimeTicketType;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ TimeTicketFormComponent ]
    })
    .compileComponents();
    ticket = {type: ".SingleTicket", price: 100, discounted: true, validitySeconds: 300, name: "test"};
  });

  beforeEach(() => {
    location = TestBed.inject(Location);
    spyOn(location, 'getState').and.returnValue(ticket);
    fixture = TestBed.createComponent(TimeTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
