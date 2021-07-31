import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { translateTransition } from './routing-transitions';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    translateTransition,
    // scaleTransition,
  ],
})
export class AppComponent implements OnInit {

  year = new Date().getFullYear();

  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedinIn;

  constructor(private router: Router) { }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab']
      if (!tab) return 'secondary'
      return tab
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      setTimeout(() => document.getElementsByClassName("content-section")[0].scrollTo({top: 0, left: 0, behavior: 'auto'}), 200)
  });
  }
}
