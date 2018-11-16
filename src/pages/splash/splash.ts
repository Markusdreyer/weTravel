import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.slides = [
      {
        title: 'Welcome to your personal guide to the city of Oslo.',
        description: 'Before we start, we are going to show you some of the features of our App.<br/>' +
        '<br/>Swipe to continue ' +
        '<img class="arrow" src="assets/imgs/splash/arrow.png" />',
        image: ''
      },
      {
        title: '',
        description: 'To add something to your Bookmarks, simply tap this icon in the top left corner of an attraction, so you can find it again when needed.<br/>' +
        '<br/><img src="assets/imgs/splash/tabs.png" /><br/>' +
         'Your Bookmarks is easily accessible in the tabs at the bottom of the App.',
        image: 'assets/imgs/splash/003-bookmark.png'
      },
      {
        title: '',
        description: 'We offer functionality to help make your trip in Oslo as comfortable & easy as possible, that\'s why we are working together with weChat to offer the easiest and safest payment option in the industry, if you wish to use the App without verification, simply press "Continue as Guest".',
        image: ''
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  startApp() {
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(false);

  }


}
