import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstRunPage } from '../pages';

@Component({
  //templateUrl: 'app.html'
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`

})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Splash', component: 'SplashPage'},
    { title: 'HomePage', component: 'HomePage' },
    { title: 'TabsPage', component: 'TabsPage' },
    { title: 'LoginPage', component: 'LoginPage' },
    { title: 'ActivitiesPage', component: 'ActivitiesPage' },
    { title: 'DetailPage', component: 'DetailPage' },
    { title: 'RestaurantsPage', component: 'RestaurantsPage' },
    { title: 'ShopsPage', component: 'ShopsPage' },
    { title: 'BookmarksPage', component: 'BookmarksPage' }

  ]

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

