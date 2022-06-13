import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Ticket} from "src/app/tickets/models/ticket";
import {LocalizationService} from "../../../services/localization.service";
import * as moment from "moment";

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  myTickets: Array<Array<Ticket>> = [[], [], [], []];
  newTicket: Ticket | undefined = undefined;

  constructor(private readonly route: ActivatedRoute, private router: Router, readonly localization: LocalizationService) {
    this.newTicket = <Ticket>router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data['myTickets']);
    this.route.snapshot.data['myTickets'].forEach((ticket: Ticket) => {
      if (ticket.validityStatus === 'VALID') {
        this.myTickets[0].push(ticket);
      } else if (ticket.validityStatus === 'MAYBE_VALID') {
        this.myTickets[1].push(ticket);
      } else if (ticket.validityStatus === 'NOT_YET_VALID') {
        this.myTickets[2].push(ticket);
      } else if (ticket.validityStatus === 'EXPIRED') {
        this.myTickets[3].push(ticket);
      }
    });
  }

  getValidationDate(date: number) {
    return moment.unix(date).toDate().toLocaleDateString() +"\t" + moment.unix(date).toDate().toLocaleTimeString();
  }

  checkIfNew(ticket: Ticket) {
    if(this.newTicket === undefined || this.newTicket.id !== ticket.id)
      return 'card';
    else
      return 'card newTicket';
  }

}
