import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-single-ticket-form',
  templateUrl: './single-ticket-form.component.html',
  styleUrls: ['./single-ticket-form.component.css']
})
export class SingleTicketFormComponent implements OnInit {

  discount: String | null;
  prize: Number;
  form:FormGroup;

  constructor(private fb:FormBuilder) {
    this.discount = localStorage.getItem("discount");
    // @ts-ignore
    this.prize = JSON.parse(localStorage.getItem("prize"));
    // localStorage.removeItem("time");
    // localStorage.removeItem("prize");
    // localStorage.removeItem("discount");
    this.form = this.fb.group({
      busNumber: ['', Validators.required, Validators.pattern("^[0-9]*$")],
    });
  }

  ngOnInit(): void {
  }

  // buyTicket() {
  //   console.log(this.prize + " " + this.discount);
  //   console.log(this.form.get('busNumber'));
  // }

}
