import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html',
})
export class ShopsPage {

  shops: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shops = [
      new Shop("Antiques", "../../assets/imgs/antiques.jpg"),
      new Shop("Books", "../../assets/imgs/books.jpg"),
      new Shop("Music", "../../assets/imgs/music.jpeg"),
      new Shop("Luxury", "../../assets/imgs/luxury.jpeg")
    ];

  }

}

function Shop(name: string, image: string) {
  this.name = name;
  this.image = image;
}