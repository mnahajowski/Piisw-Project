import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTicketFormComponent } from './single-ticket-form.component';

describe('SingleTicketFormComponent', () => {
  let component: SingleTicketFormComponent;
  let fixture: ComponentFixture<SingleTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTicketFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
