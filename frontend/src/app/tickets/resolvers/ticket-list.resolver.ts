import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {TicketListService} from "../services/ticket-list.service";
import {Assortment} from "../models/assortment";

@Injectable({
  providedIn: 'root'
})
export class TicketListResolver implements Resolve<Assortment> {

  constructor(private readonly ticketListService: TicketListService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Assortment> {
    return this.ticketListService.getAllTickets();
  }
}
