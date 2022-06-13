import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Assortment} from "../../models/assortment";
import {TicketType} from "../../models/ticket-type";
import {SingleTicketType} from "../../models/single-ticket-type";
import {LongTimeTicketType} from "../../models/long-time-ticket-type";
import {TimeTicketType} from "../../models/time-ticket-type";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LocalizationService } from 'src/app/services/localization.service';
import {AuthService} from "../../../main-view/services/auth.service";
import { TicketTypeName } from '../../models/ticket-type-name';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{

  assortment: Assortment | undefined;
  tickets: TicketType[] = [];
  singleTickets: SingleTicketType[] = [];
  longTimeTickets: LongTimeTicketType[] = [];
  timeTickets: TimeTicketType[] = []
  ticketTypes: String[] = ['.TimeTicket', '.LongTimeTicket', '.SingleTicket' ]

  constructor(private readonly route: ActivatedRoute, private modalService: NgbModal,
    readonly localization: LocalizationService, private authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    this.assortment = this.route.snapshot.data['tickets'];

    this.tickets = this.assortment!.ticketTypes;
    this.tickets.forEach((ticket: TicketType) => {
      if (ticket.type === '.SingleTicket') {
        this.singleTickets.push(<SingleTicketType>ticket);
      } else if (ticket.type === '.LongTimeTicket') {
        this.longTimeTickets.push(<LongTimeTicketType>ticket);
      } else if (ticket.type === '.TimeTicket') {
        this.timeTickets.push(<TimeTicketType>ticket);
      }

    })
  }

  findDiscounted(tickets: TicketType[], shouldBeDiscounted: boolean): TicketType[] {
    return tickets.filter(ticket => ticket.discounted === shouldBeDiscounted)
  }

  findSpecificTickets(tickets: TicketType[], ticketType: String): TicketType[]{
    return tickets.filter(ticket => ticket.type === ticketType)
  }


  getTicketTypeFormComponent(ticketType: TicketTypeName) {
    switch (ticketType) {
      case ".SingleTicket": return "/buySingleTicket";
      case ".TimeTicket": return "/buyTimeTicket";
      case ".LongTimeTicket": return "/buyLongTimeTicket";
    }
  }

  getTime(ticket: TicketType) {
    if (ticket.type === '.TimeTicket' || ticket.type === '.LongTimeTicket') {
      return ticket.validitySeconds;
    } else {
      return 1;
    }
  }

  checkIfLoggedIn(ticket: TicketType) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl(this.getTicketTypeFormComponent(ticket.type), {state: ticket}).then(r => console.log(r));
    } else if (this.authService.isLoggedOut()) {
      this.router.navigate(["/login"]).then(r => console.log(r));
    }

  }
}
