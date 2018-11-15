import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { ValueTransformer } from '@angular/compiler/src/util';

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
        title: 'Travel advice',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        image: 'assets/imgs/splash/001-suitcase.png'
      },
      {
        title: 'Things to see and do in Oslo',
        description: 'Mauris ullamcorper id ante sed vehicula. Praesent auctor dolor vel nisi vehicula mollis. ',
        image: 'assets/imgs/splash/002-flag.png'
      },
      {
        title: 'Add destinations to favorites',
        description: 'Nam eu rutrum elit, a consectetur diam. Mauris eu vulputate augue, tristique accumsan lectus. ',
        image: 'assets/imgs/splash/003-bookmark.png'
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
