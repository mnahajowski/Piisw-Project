import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(private fb:FormBuilder) {
    // @ts-ignore
    this.time = JSON.parse(localStorage.getItem("time"));
    this.discount = localStorage.getItem("discount");
    // @ts-ignore
    this.prize = JSON.parse(localStorage.getItem("prize"));
    localStorage.removeItem("time");
    localStorage.removeItem("prize");
    localStorage.removeItem("discount");
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

}
