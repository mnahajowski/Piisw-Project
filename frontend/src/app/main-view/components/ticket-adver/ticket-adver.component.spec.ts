import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAdverComponent } from './ticket-adver.component';

describe('TicketAdverComponent', () => {
  let component: TicketAdverComponent;
  let fixture: ComponentFixture<TicketAdverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketAdverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketAdverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
