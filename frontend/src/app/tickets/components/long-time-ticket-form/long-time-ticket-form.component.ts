import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {TicketType} from "../../models/ticket-type";
import {HttpClient, HttpParams} from "@angular/common/http";
import * as moment from "moment";

@Component({
  selector: 'app-long-time-ticket-form',
  templateUrl: './long-time-ticket-form.component.html',
  styleUrls: ['./long-time-ticket-form.component.css']
})
export class LongTimeTicketFormComponent implements OnInit {

  ticket: TicketType;
  time: Number;
  discount: String | null;
  price: Number;
  model: NgbDateStruct | undefined;
  myGroup: FormGroup;
  setData: any;

  constructor(private fb:FormBuilder, private http: HttpClient, private router: Router) {
    this.ticket = <TicketType>this.router.getCurrentNavigation()?.extras.state;
    this.time = this.ticket.validitySeconds;
    this.discount = "" + this.ticket.discounted; // TODO polish discount
    this.price = this.ticket.price;
    const now = new Date();
    // const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate(), now.getHours());
    this.myGroup = new FormGroup({
      dateJoined: new FormControl()
    });

  }

  ngOnInit(): void {
  }


  updateMyDate(newDate: any) {
    this.setData = newDate;
    console.log(newDate);
  }

  getDate() {
    // @ts-ignore
    let date: Date = new Date(<number>this.model?.year, <number>(this.model?.month-1), this.model?.day);
    date.setDate(date.getDate() + <number>this.time/60/60/24);
    return date.toLocaleDateString();
  }

  buyTicket() {
    let date: Date = new Date(this.setData.year, this.setData.month-1, this.setData.day);
    const params = new HttpParams()
      .set('startTime', moment(date).unix());

    return this.http.post<TicketType>('/api/ticket', this.ticket, {'params': params}).subscribe(t => console.log(t));
  }
}
