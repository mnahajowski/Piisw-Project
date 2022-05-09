import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../models/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketListService {

  constructor(private readonly http: HttpClient) { }

  getAllBooks(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('/api/ticket');
  }
}
