import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTicketComponent } from './check-ticket.component';
import { RouterTestingModule } from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CheckTicketComponent', () => {
  let component: CheckTicketComponent;
  let fixture: ComponentFixture<CheckTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [CheckTicketComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
