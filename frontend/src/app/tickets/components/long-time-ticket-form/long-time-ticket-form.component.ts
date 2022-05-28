import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-long-time-ticket-form',
  templateUrl: './long-time-ticket-form.component.html',
  styleUrls: ['./long-time-ticket-form.component.css']
})
export class LongTimeTicketFormComponent implements OnInit {

  time: Number;
  discount: String | null;
  prize: Number;
  model: NgbDateStruct | undefined;
  myGroup: FormGroup;
  setData: any;

  constructor(private fb:FormBuilder) {
    // @ts-ignore
    this.time = JSON.parse(localStorage.getItem("time"));
    this.discount = localStorage.getItem("discount");
    // @ts-ignore
    this.prize = JSON.parse(localStorage.getItem("prize"));
    console.log(this.prize);
    console.log(this.discount);
    const now = new Date();
    // const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate(), now.getHours());
    this.myGroup = new FormGroup({
      dateJoined: new FormControl()
    });

  }

  ngOnInit(): void {
  }


  updateMyDate(newDate: any) {
    console.log(newDate);
    this.setData = newDate;
  }

  getDate() {
    // @ts-ignore
    let date: Date = new Date(<number>this.model?.year, <number>(this.model?.month-1), this.model?.day);
    date.setDate(date.getDate() + <number>this.time/60/60/24);
    return date.toLocaleDateString();
  }
}
