import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {MyTicketsService} from "../services/my-tickets.service";
import {TicketType} from "../../tickets/models/ticket-type";

@Injectable({
  providedIn: 'root'
})
export class MyTicketsResolver implements Resolve<Array<TicketType>> {
  constructor(private readonly myTicketsService: MyTicketsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<TicketType>> {
    return this.myTicketsService.getUserTickets();
  }
}
