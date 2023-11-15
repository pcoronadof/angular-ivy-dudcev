import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

type RouterNameMap = {
  [key: string]: string;
};

@Component({
  selector: 'app-custom-modern-sidebar',
  templateUrl: './custom-modern-sidebar.component.html',
  styleUrls: ['./custom-modern-sidebar.component.scss'],
})
export class CustomModernSidebarComponent implements OnInit {
  // reference to https://www.colby.so/posts/building-a-collapsible-sidebar-with-stimulus-and-tailwind

  @ViewChild('sidenavMain') sidenavMain: ElementRef;
  @ViewChild('logoImg') logoImg: ElementRef;
  @ViewChild('navItemTitleA') navItemTitleA: ElementRef;
  @ViewChild('navItemTitleB') navItemTitleB: ElementRef;

  isOpen: boolean = true;

  routeNames: RouterNameMap = {
    '/aaaaa': './AAAAA_component',
    '/bbbbb': './BBBBB_component',
  };
  routeName: string = '';

  routerEvents: Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    // reference to https://www.tektutorialshub.com/angular/how-to-get-the-current-route-or-url-in-angular/
    this.routerEvents = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const eventUrl = event.url;
        // console.log(eventUrl);
        this.routeName = this.routeNames[eventUrl];
      }
    });
  }

  // reference to https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state

  toggleSidenav() {
    this.isOpen = !this.isOpen;

    // reference to https://stackoverflow.com/questions/63349146/how-to-toggle-class-when-click-outside-element-with-javascript
    if (this.isOpen) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');

      /* Option 1 */
      // this.sidenavMain.nativeElement.style = '';
      // this.logoImg.nativeElement.style = '';
      // this.navItemTitleA.nativeElement.style = '';

      /* Option 2 */
      this.sidenavMain.nativeElement.removeAttribute('style');
      this.logoImg.nativeElement.removeAttribute('style');
      this.navItemTitleA.nativeElement.removeAttribute('style');
      this.navItemTitleB.nativeElement.removeAttribute('style');
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');

      this.sidenavMain.nativeElement.style.width = '64px';
      this.logoImg.nativeElement.style.display = 'none';
      this.navItemTitleA.nativeElement.style.display = 'none';
      this.navItemTitleB.nativeElement.style.display = 'none';
    }
  }
}
