import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTicketFormComponent } from './time-ticket-form.component';

describe('TimeTicketFormComponent', () => {
  let component: TimeTicketFormComponent;
  let fixture: ComponentFixture<TimeTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTicketFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
