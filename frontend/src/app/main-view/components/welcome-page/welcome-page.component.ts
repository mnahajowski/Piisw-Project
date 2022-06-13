import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Location, ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private scroller: ViewportScroller) {

  }

  ngOnInit(): void {
  }

  scroll(elementId: string) {
    const element = document.getElementById(elementId);
    const yOffset = -122;
    // @ts-ignore
    window.scrollTo({top: element.getBoundingClientRect().top + window.pageYOffset + yOffset, behavior: 'smooth'})
  }

}
