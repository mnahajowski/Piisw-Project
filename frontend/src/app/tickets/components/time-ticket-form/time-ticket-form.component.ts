import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TimeTicketType} from "../../models/time-ticket-type";
import {TimeTicket} from "../../models/time-ticket";
import {TicketListService} from "../../services/ticket-list.service";
import {shareReplay, tap} from "rxjs";
import { Router } from '@angular/router';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-time-ticket-form',
  templateUrl: './time-ticket-form.component.html',
  styleUrls: ['./time-ticket-form.component.css']
})
export class TimeTicketFormComponent implements OnInit {

  ticket: TimeTicketType;
  time: number;
  discount: String | null;
  price: Number;
  form:FormGroup;

  constructor(private fb:FormBuilder, private http: HttpClient, private router: Router,
    readonly localization: LocalizationService) {
    this.ticket = <TimeTicketType>router.getCurrentNavigation()?.extras.state;
    this.time = this.ticket.validitySeconds;
    this.discount = this.localization.getLocalizedDiscount(this.ticket.discounted);
    this.price = this.ticket.price;
    this.form = this.fb.group({
      discount: [''],
      price: [''],
      time: ['']
    });
  }

  ngOnInit(): void {
  }

  buyTicket() {
    return this.http.post<TimeTicket>('/api/ticket', this.ticket).
    subscribe(_ => this.router.navigate(["/myTickets"]));
  }

}
