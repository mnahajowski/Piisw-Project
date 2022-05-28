import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TimeTicket} from "../../models/time-ticket";
import {TicketListService} from "../../services/ticket-list.service";
import {shareReplay, tap} from "rxjs";
import {TicketType} from "../../models/ticket-type";

@Component({
  selector: 'app-time-ticket-form',
  templateUrl: './time-ticket-form.component.html',
  styleUrls: ['./time-ticket-form.component.css']
})
export class TimeTicketFormComponent implements OnInit {

  time: Number;
  discount: String | null;
  prize: Number;
  form:FormGroup;

  constructor(private fb:FormBuilder, private http: HttpClient) {
    // @ts-ignore
    this.time = JSON.parse(localStorage.getItem("time"));
    this.discount = localStorage.getItem("discount");
    // @ts-ignore
    this.prize = JSON.parse(localStorage.getItem("prize"));
    this.form = this.fb.group({
      discount: [''],
      prize: [''],
      time: ['']
    });
    console.log(this.prize);
    console.log(this.discount);
  }

  ngOnInit(): void {
  }

  buyTicket() {
    // @ts-ignore
    let ticket = JSON.parse(localStorage.getItem("ticket"));
    return this.http.post<TicketType>('/api/ticket', ticket).subscribe(t => console.log(t));
  }

}
