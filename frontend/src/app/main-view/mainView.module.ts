import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketAdverComponent} from "./components/ticket-adver/ticket-adver.component";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';

@NgModule({
  declarations: [
    TicketAdverComponent,
    WelcomePageComponent,
    ClientReviewsComponent,
    LoginComponent,
    RegisterComponent,
    MyTicketsComponent
  ],
  exports: [
    WelcomePageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MainViewModule { }
