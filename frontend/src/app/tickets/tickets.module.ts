import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketListComponent} from "./components/ticket-list/ticket-list.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TicketListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TicketsModule { }
