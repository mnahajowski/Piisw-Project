import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {TicketListComponent} from "./tickets/components/ticket-list/ticket-list.component";
import {TicketListResolver} from "./tickets/resolvers/ticket-list.resolver";
import {WelcomePageComponent} from "./main-view/components/welcome-page/welcome-page.component";

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
    path: 'home',
    component: WelcomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
