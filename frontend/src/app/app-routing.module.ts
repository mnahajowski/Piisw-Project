import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {TicketListComponent} from "./tickets/components/ticket-list/ticket-list.component";
import {TicketListResolver} from "./tickets/resolvers/ticket-list.resolver";
import {WelcomePageComponent} from "./main-view/components/welcome-page/welcome-page.component";
import {LoginComponent} from "./main-view/components/login/login.component";
import {SingleTicketFormComponent} from "./tickets/components/single-ticket-form/single-ticket-form.component";
import {TimeTicketFormComponent} from "./tickets/components/time-ticket-form/time-ticket-form.component";
import {LongTimeTicketFormComponent} from "./tickets/components/long-time-ticket-form/long-time-ticket-form.component";
import {RegisterComponent} from "./main-view/components/register/register.component";
import {MyTicketsComponent} from "./main-view/components/my-tickets/my-tickets.component";
import {MyTicketsResolver} from "./main-view/resolvers/my-tickets.resolver";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'ticket',
    component: TicketListComponent,
    resolve: {
      tickets: TicketListResolver
    }
  },
  {
    path: 'buySingleTicket',
    component: SingleTicketFormComponent,
  },
  {
    path: 'buyTimeTicket',
    component: TimeTicketFormComponent,
  },
  {
    path: 'buyLongTimeTicket',
    component: LongTimeTicketFormComponent,
  },
  {
    path: 'home',
    component: WelcomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'myTickets',
    component: MyTicketsComponent,
    resolve: {
      myTickets: MyTicketsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
