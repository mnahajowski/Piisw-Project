import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Assortment} from "../models/assortment";

@Injectable({
  providedIn: 'root'
})
export class TicketListService {

  constructor(private readonly http: HttpClient) { }

  getAllTickets(): Observable<Assortment> {
    return this.http.get<Assortment>('/api/assortment');
  }

  // getUserTickets()
}
