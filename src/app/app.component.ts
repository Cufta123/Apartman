import { Component, OnInit } from '@angular/core';


import { RouteModel } from './services/routes.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Index of active route. Used to trigger the slide
   * animation in the right direction.
   */
  public activeRouteIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  public onRouteChange(event: {
    activeRoute: RouteModel<unknown>;
    index: number;
  }) {
    this.activeRouteIndex = event.index;
  }
}
