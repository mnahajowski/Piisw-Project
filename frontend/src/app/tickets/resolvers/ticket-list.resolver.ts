import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {TicketListService} from "../services/ticket-list.service";
import {Ticket} from "../models/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketListResolver implements Resolve<Ticket[]> {

  constructor(private readonly ticketListService: TicketListService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ticket[]> {
    return this.ticketListService.getAllBooks();
  }
}
