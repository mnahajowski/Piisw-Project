import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TicketType} from "../../models/ticket-type";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-single-ticket-form',
  templateUrl: './single-ticket-form.component.html',
  styleUrls: ['./single-ticket-form.component.css']
})
export class SingleTicketFormComponent implements OnInit {

  discount: String | null;
  prize: Number;

  constructor(private http: HttpClient) {
    this.discount = localStorage.getItem("discount");
    // @ts-ignore
    this.prize = JSON.parse(localStorage.getItem("prize"));
  }

  ngOnInit(): void {
  }

  buyTicket() {
    // @ts-ignore
    let ticket = JSON.parse(localStorage.getItem("ticket"));
    return this.http.post<TicketType>('/api/ticket', ticket).subscribe(t => console.log(t));
  }

}
