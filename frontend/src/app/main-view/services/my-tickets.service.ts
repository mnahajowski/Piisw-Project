import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Assortment} from "../../tickets/models/assortment";
import {TicketType} from "../../tickets/models/ticket-type";

@Injectable({
  providedIn: 'root'
})
export class MyTicketsService {

  constructor(private readonly http: HttpClient) { }

  getUserTickets(): Observable<Array<TicketType>> {
    return this.http.get<Array<any>>('/api/ticket');
  }
}
