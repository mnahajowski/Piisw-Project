import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { LongTimeTicketType } from '../../models/long-time-ticket-type';
import { LongTimeTicket } from '../../models/long-time-ticket';
import {HttpClient, HttpParams} from "@angular/common/http";
import * as moment from "moment";
import { LocalizationService } from 'src/app/services/localization.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-long-time-ticket-form',
  templateUrl: './long-time-ticket-form.component.html',
  styleUrls: ['./long-time-ticket-form.component.css']
})
export class LongTimeTicketFormComponent {

  ticket: LongTimeTicketType;
  time: number;
  discount: String | null;
  price: Number;
  model!: NgbDateStruct;
  myGroup: FormGroup;
  setData: any;

  constructor(private fb:FormBuilder, private http: HttpClient, private router: Router,
    readonly localization: LocalizationService, private config: NgbDatepickerConfig, private location: Location) {
    const t = <LongTimeTicketType>location.getState();
    this.ticket = {
      discounted: t.discounted,
      name: t.name,
      price: t.price,
      type: t.type,
      validitySeconds: t.validitySeconds
    };
    this.time = this.ticket.validitySeconds;
    this.discount = this.localization.getLocalizedDiscount(this.ticket.discounted);
    this.price = this.ticket.price;
    this.myGroup = new FormGroup({
      dateJoined: new FormControl()
    });

    const current = new Date();
    config.minDate = { year: current.getFullYear(), month:
        current.getMonth() + 1, day: current.getDate() };
    config.outsideDays = 'hidden';
  }

  updateMyDate(newDate: any) {
    this.setData = newDate;
  }

  getDate() {
    let date: Date = new Date(this.model.year, (this.model.month-1), this.model.day);
    date.setDate(date.getDate() + this.time/60/60/24);
    return date.toLocaleDateString();
  }

  buyTicket() {
    let date: Date = new Date(this.setData.year, this.setData.month-1, this.setData.day);
    const params = new HttpParams()
      .set('startTime', moment(date).unix());

    return this.http.post<LongTimeTicket>('/api/ticket', this.ticket, {'params': params}).subscribe(ticket => {
      this.router.navigateByUrl("/myTickets", {state: ticket});
    });
  }
}
