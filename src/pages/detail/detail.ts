import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dto } from '../home/DTO';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  product: Dto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get('data')
    console.log(this.product);
  }
}
