import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketListComponent} from "./tickets/components/ticket-list/ticket-list.component";
import {TicketListResolver} from "./tickets/resolvers/ticket-list.resolver";


const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/ticket-list'
  // }
  {
    path: 'ticket',
    component: TicketListComponent,
    resolve: {
      tickets: TicketListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
