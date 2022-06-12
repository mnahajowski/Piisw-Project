import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTimeTicketFormComponent } from './long-time-ticket-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TimeTicketType} from "../../models/time-ticket-type";
import {LongTimeTicketType} from "../../models/long-time-ticket-type";
import {Location} from "@angular/common";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

describe('LongTimeTicketFormComponent', () => {
  let component: LongTimeTicketFormComponent;
  let fixture: ComponentFixture<LongTimeTicketFormComponent>;
  let location: Location;
  let ticket: LongTimeTicketType;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NgbDatepickerModule
      ],
      declarations: [ LongTimeTicketFormComponent ]
    })
    .compileComponents();
    ticket = {type: ".LongTimeTicket", price: 100, discounted: true, validitySeconds: 300, name: "test2"};
  });

  beforeEach(() => {
    location = TestBed.inject(Location);
    spyOn(location, 'getState').and.returnValue(ticket);
    fixture = TestBed.createComponent(LongTimeTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
