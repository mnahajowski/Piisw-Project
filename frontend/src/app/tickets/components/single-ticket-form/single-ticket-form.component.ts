import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TicketType} from "../../models/ticket-type";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-single-ticket-form',
  templateUrl: './single-ticket-form.component.html',
  styleUrls: ['./single-ticket-form.component.css']
})
export class SingleTicketFormComponent implements OnInit {

  ticket: TicketType;
  discount: String | null;
  price: Number;

  constructor(private http: HttpClient, private router: Router, private localization: LocalizationService) {
    this.ticket = <TicketType>router.getCurrentNavigation()?.extras.state;
    this.discount = this.localization.getLocalizedDiscount(this.ticket.discounted);
    this.price = this.ticket.price;
  }

  ngOnInit(): void {
  }

  buyTicket() {
    return this.http.post<TicketType>('/api/ticket', this.ticket).subscribe(t => alert(JSON.stringify(t)));
  }

}
