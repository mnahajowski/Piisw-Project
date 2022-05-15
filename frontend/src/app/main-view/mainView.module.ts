import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketAdverComponent} from "./components/ticket-adver/ticket-adver.component";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';

@NgModule({
  declarations: [
    TicketAdverComponent,
    WelcomePageComponent,
    ClientReviewsComponent
  ],
  exports: [
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MainViewModule { }
