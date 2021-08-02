import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { translateTransition } from './routing-transitions';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
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
  mediaQuery1 = window.matchMedia("(max-width: 950px)");
  mediaQuery2 = window.matchMedia("(min-width: 950px)");
  menuActive: boolean;

  faEnvelope = faEnvelope;
  faBars = faBars;
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
      setTimeout(() => document.getElementsByClassName("content-section")[0].scrollTo({top: 0, left: 0, behavior: 'auto'}), 200);
      document.getElementsByClassName("mobile-menu")[0].classList.remove("open");
      this.menuActive = false;
    });

    this.closeMenu(this.mediaQuery1);
    this.closeMenu(this.mediaQuery2);
    this.mediaQuery1.addEventListener("change", this.closeMenu);
    this.mediaQuery2.addEventListener("change", this.closeMenu);
  }

  toggleMenu() {
    document.getElementsByClassName("mobile-menu")[0].classList.toggle("open");
    this.menuActive = !this.menuActive;
  }

  closeMenu(x) {
    if (x.matches) {
      this.menuActive = false;
      document.getElementsByClassName("mobile-menu")[0].classList.remove("open");
    }
  }
}
