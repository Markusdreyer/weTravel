import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
  //Lists of attractions
  restaurants: any[];
  shops: any[];
  activities: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
