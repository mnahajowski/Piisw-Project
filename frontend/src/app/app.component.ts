import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  mainView: boolean


  constructor(private location: Location) {
    this.title = 'Spring Boot - Angular Application - Frontend';
    // this.mainView = true;
    this.mainView = location.path() === "";
  }

  // ngOnInit(): void {
  //   this.mainView = location.path() === "";
  // }

}
