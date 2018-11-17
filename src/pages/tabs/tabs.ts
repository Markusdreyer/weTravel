import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root } from '../';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  loginParam: string;


  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = "Home";
  tab2Title = "Browse";
  tab3Title = "Bookmarks";

  tab1Params = {};

  

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.loginParam = navParams.get('data');
    this.tab1Params = {user:navParams.get('data')};
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  

}
