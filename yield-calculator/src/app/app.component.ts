import {Component} from '@angular/core';
import {Event, Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentRoute: Router;
  public path: string;

  constructor(private route: Router) {
    this.currentRoute = route;
  }

  ngOnInit() {
    this.currentRoute.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.path = event.url;
      }
    });
  }
}
