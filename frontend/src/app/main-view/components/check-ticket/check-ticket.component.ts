import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of, zip } from 'rxjs';
import { LocalizationService } from 'src/app/services/localization.service';
import { Ticket } from 'src/app/tickets/models/ticket';

@Component({
  selector: 'app-check-ticket',
  templateUrl: './check-ticket.component.html',
  styleUrls: ['./check-ticket.component.css']
})
export class CheckTicketComponent {

  form: FormGroup;
  ticketValid?: boolean;
  ticket?: Ticket;

  constructor(formBuilder: FormBuilder, private http: HttpClient, readonly localization: LocalizationService) {
    this.form = formBuilder.group({
      routeNumber: ["", Validators.required],
      ticketNumber: ["", Validators.required],
    });
  }

  checkTicket() {
    const { routeNumber, ticketNumber } = this.form.value;
    const params = new HttpParams().append("routeNumber", routeNumber);
    zip(this.http.get<Ticket>(`/api/ticket/${ticketNumber}`).pipe(catchError(_ => of(undefined))),
      this.http.get<boolean>(`/api/ticket/${ticketNumber}/check`, { params })).subscribe(([ticket, valid]) => {
        this.ticketValid = valid;
        this.ticket = ticket;
      });
  }
}
