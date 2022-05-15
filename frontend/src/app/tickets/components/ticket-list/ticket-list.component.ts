import { Component, OnInit } from '@angular/core';
import{ Ticket } from '../../models/ticket'
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{

  tickets: Ticket[] | undefined;

  constructor(private readonly route: ActivatedRoute) {

  }
  ngOnInit() {
    this.tickets = this.route.snapshot.data['tickets'];
    console.log('--- book ---');
    console.log(this.tickets);

  }
  // ngOnInit(): void {
  //   console.log(this.tickets)
  // }

}
