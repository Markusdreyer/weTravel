import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {Dto} from '../home/DTO';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  product: Dto;
  rating: Dto;


  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.product = navParams.get('data');
    this.rating = navParams.get('data');
    console.log(this.product);
    //this.product.rating = this.rating;
  }
}
