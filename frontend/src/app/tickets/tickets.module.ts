import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketListComponent} from "./components/ticket-list/ticket-list.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SingleTicketFormComponent } from './components/single-ticket-form/single-ticket-form.component';
import { TimeTicketFormComponent } from './components/time-ticket-form/time-ticket-form.component';
import { LongTimeTicketFormComponent } from './components/long-time-ticket-form/long-time-ticket-form.component';

@NgModule({
  declarations: [
    TicketListComponent,
    SingleTicketFormComponent,
    TimeTicketFormComponent,
    LongTimeTicketFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class TicketsModule { }
