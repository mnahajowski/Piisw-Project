import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Assortment} from "../../models/assortment";
import {TicketType} from "../../models/ticket-type";
import {SingleTicket} from "../../models/single-ticket";
import {LongTimeTicket} from "../../models/long-time-ticket";
import {TimeTicket} from "../../models/time-ticket";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{

  assortment: Assortment | undefined;
  tickets: TicketType[] = [];
  singleTickets: SingleTicket[] = [];
  longTimeTickets: LongTimeTicket[] = [];
  timeTickets: TimeTicket[] = []
  ticketTypes: String[] = ['.TimeTicket', '.LongTimeTicket', '.SingleTicket' ]
  // singleTicketForm: FormGroup;
  // timeTicketForm: FormGroup;
  // longTimeTicketForm: FormGroup;

  constructor(private readonly route: ActivatedRoute, private modalService: NgbModal) {
    // this.singleTicketForm = this.fb.group({
    //   busNumber: ['',Validators.required, Validators.pattern("^[0-9]*$")]
    // });
  }
  ngOnInit() {
    this.assortment = this.route.snapshot.data['tickets'];

    console.log(this.tickets);
    console.log(this.assortment?.ticketTypes);
    // @ts-ignore
    this.tickets = this.assortment?.ticketTypes;
    // @ts-ignore
    this.tickets.forEach((ticket: TicketType) => {
      if (ticket.type === '.SingleTicket') {
        this.singleTickets.push(ticket);
      } else if (ticket.type === '.LongTimeTicket') {
        this.longTimeTickets.push(ticket);
      } else if (ticket.type === '.TimeTicket') {
        this.timeTickets.push(ticket);
      }

    })
    console.log(this.singleTickets);
    console.log(this.timeTickets);
    console.log(this.longTimeTickets);
    localStorage.removeItem("time");
    localStorage.removeItem("prize");
    localStorage.removeItem("discount");
    localStorage.removeItem("ticket");

  }

  getTicketType(ticket: TicketType) : Boolean{
    console.log(ticket.type)
    return true;
  }

  findDiscounted(tickets: TicketType[] | undefined, shouldBeDiscounted: boolean): TicketType[] {
    // @ts-ignore
    return tickets.filter(ticket => ticket.discounted === shouldBeDiscounted)
  }

  findSpecificTickets(tickets: TicketType[], ticketType: String): TicketType[]{
    return tickets.filter(ticket => ticket.type === ticketType)
  }
  // ngOnInit(): void {
  //   console.log(this.tickets)
  // }

  getPolishNameType(ticketType: String, isMulti:boolean) {
    if (ticketType === '.SingleTicket') {
      if (isMulti)
        return 'Bilety jednorazowe';
      return 'Bilet jednorazowy';
    }
    else if (ticketType === '.LongTimeTicket') {
      if (isMulti)
        return 'Bilety długototerminowe';
      return 'Bilet długototerminowy';
    }
    else if (ticketType === '.TimeTicket') {
      if (isMulti)
        return 'Bilety czasowe';
      return 'Bilet czasowy';
    }
    else
      return null;
  }

  getPolishDiscount(isDiscount: boolean) {
    if (isDiscount)
      return 'Ulgowy';
    else
      return 'Normalny';
  }

  getTicketTypeFormComponent(ticketType: String) {
    if (ticketType === '.SingleTicket') {
      return "/buySingleTicket";
    }
    else if (ticketType === '.TimeTicket')
      return "/buyTimeTicket";
    else if (ticketType === '.LongTimeTicket')
      return "/buyLongTimeTicket";
    return null;
  }

  saveData(ticket: any, ticketType: String, content: [Number, String, Number]) {
    console.log(content);
    console.log("ticket");
    console.log(ticket);
    // @ts-ignore
    localStorage.setItem("ticket", JSON.stringify(ticket));
    // @ts-ignore
    localStorage.setItem("prize", JSON.parse(content[0]));
    // @ts-ignore
    localStorage.setItem("discount", content[1]);
    // @ts-ignore
    localStorage.setItem("time", JSON.parse(content[2]));
  }

  getTime(ticket: TicketType) {
    if (ticket.type === '.TimeTicket' || ticket.type === '.LongTimeTicket') {
      return ticket.validitySeconds;
    } else {
      return 1;
    }
  }



}
