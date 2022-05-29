import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TimeTicket} from "../../models/time-ticket";
import {TicketListService} from "../../services/ticket-list.service";
import {shareReplay, tap} from "rxjs";
import {TicketType} from "../../models/ticket-type";
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-ticket-form',
  templateUrl: './time-ticket-form.component.html',
  styleUrls: ['./time-ticket-form.component.css']
})
export class TimeTicketFormComponent implements OnInit {

  ticket: TicketType;
  time: Number;
  discount: String | null;
  price: Number;
  form:FormGroup;

  constructor(private fb:FormBuilder, private http: HttpClient, private router: Router) {
    this.ticket = <TicketType>router.getCurrentNavigation()?.extras.state;
    this.time = this.ticket.validitySeconds;
    this.discount = "" + this.ticket.discounted; // TODO polish discount
    this.price = this.ticket.price;
    this.form = this.fb.group({
      discount: [''],
      price: [''],
      time: ['']
    });
    console.log(this.price);
    console.log(this.discount);
  }

  ngOnInit(): void {
  }

  buyTicket() {
    return this.http.post<TicketType>('/api/ticket', this.ticket).subscribe(t => console.log(t));
  }

}
