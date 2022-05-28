import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTimeTicketFormComponent } from './long-time-ticket-form.component';

describe('LongTimeTicketFormComponent', () => {
  let component: LongTimeTicketFormComponent;
  let fixture: ComponentFixture<LongTimeTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
