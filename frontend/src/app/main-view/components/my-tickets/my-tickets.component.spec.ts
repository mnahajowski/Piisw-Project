import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketsComponent } from './my-tickets.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap} from "@angular/router";

describe('MyTicketsComponent', () => {
  let component: MyTicketsComponent;
  let fixture: ComponentFixture<MyTicketsComponent>;


  beforeEach(async () => {
    let ticket1 = {type: ".LongTimeTicket", price: 100, discounted: true, validitySeconds: 300, name: "test2"};
    let ticket2 = {type: ".LongTimeTicket", price: 100, discounted: true, validitySeconds: 300, name: "test2"};
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ MyTicketsComponent ],
      providers:
        [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                paramMap: {
                  get: (key: string) => {
                    switch (key) {
                      case 'myTickets':
                        return [ticket1, ticket2]
                      default:
                        return []
                    }
                  }
                }
              }
            }
          }
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
