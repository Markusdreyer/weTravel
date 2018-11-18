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
  showSkip = false;

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.slides = [
      {
        title: 'Travel advice',
        description: 'There\'s a lot of iconic views you can see in Oslo. Take your time and enjoy!',
        image: 'assets/imgs/splash/001-suitcase.png'
      },
      {
        title: 'Things to see and do in Oslo',
        description: 'Our App offers the most popular attractions in Oslo, it´s constantly evolving thanks to our users!',
        image: 'assets/imgs/splash/002-flag.png'
      },
      {
        title: 'Add destinations to favorites',
        description: 'To add something to your time planner, simply type the bookmark button in the description of the attraction. ',
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
