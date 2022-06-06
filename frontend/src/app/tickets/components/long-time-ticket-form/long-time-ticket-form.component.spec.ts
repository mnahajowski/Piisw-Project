import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTimeTicketFormComponent } from './long-time-ticket-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('LongTimeTicketFormComponent', () => {
  let component: LongTimeTicketFormComponent;
  let fixture: ComponentFixture<LongTimeTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LongTimeTicketFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTimeTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
