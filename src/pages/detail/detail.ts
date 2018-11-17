import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Dto } from '../home/DTO';
import { HomePageModule } from '../home/home.module';
import {StarRatingModule } from 'ionic3-star-rating';
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
  rating: Dto;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
    this.product = navParams.get('data');
    this.rating = navParams.get('data');
    //console.log(this.product);
    //this.product.rating = this.rating;
  }
}
