import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SingleTicketType} from "../../models/single-ticket-type";
import {SingleTicket} from "../../models/single-ticket";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-single-ticket-form',
  templateUrl: './single-ticket-form.component.html',
  styleUrls: ['./single-ticket-form.component.css']
})
export class SingleTicketFormComponent implements OnInit {

  ticket: SingleTicketType;
  discount: String | null;
  price: Number;

  constructor(private http: HttpClient, private router: Router, private localization: LocalizationService) {
    this.ticket = <SingleTicketType>router.getCurrentNavigation()?.extras.state;
    this.discount = this.localization.getLocalizedDiscount(this.ticket.discounted);
    this.price = this.ticket.price;
  }

  ngOnInit(): void {
  }

  buyTicket() {
    return this.http.post<SingleTicket>('/api/ticket', this.ticket).subscribe(_ => this.router.navigate(["/myTickets"]));
  }

}
