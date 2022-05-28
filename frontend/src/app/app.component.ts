import { Component } from '@angular/core';
import { Location } from '@angular/common';
import * as moment from "moment";
import {AuthService} from "./main-view/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  mainView: boolean


  constructor(private location: Location, private authService: AuthService) {
    this.title = 'Spring Boot - Angular Application - Frontend';
    // this.mainView = true;
    this.mainView = location.path() === "";
  }

  checkExpiration() {
    return this.authService.checkExpiration();
  }

  getExpiration() {
    return this.authService.getExp();
  }

  logout($event: MouseEvent) {
    this.authService.logout();
    window.location.href = '/home';
  }
}
