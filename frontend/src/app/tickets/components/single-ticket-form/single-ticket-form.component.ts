import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TicketType} from "../../models/ticket-type";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-ticket-form',
  templateUrl: './single-ticket-form.component.html',
  styleUrls: ['./single-ticket-form.component.css']
})
export class SingleTicketFormComponent implements OnInit {

  ticket: TicketType;
  discount: String | null;
  prize: Number;

  constructor(private http: HttpClient, private router: Router) {
    this.ticket = <TicketType>router.getCurrentNavigation()?.extras.state;
    this.discount = "" + this.ticket.discounted; // TODO polish discount
    this.prize = this.ticket.price;
  }

  ngOnInit(): void {
  }

  buyTicket() {
    return this.http.post<TicketType>('/api/ticket', this.ticket).subscribe(t => console.log(t));
  }

}
