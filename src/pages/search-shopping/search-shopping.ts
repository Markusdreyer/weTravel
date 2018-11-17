import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-shopping',
  templateUrl: 'search-shopping.html',
})
export class SearchShoppingPage {
  shops: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shops = [
      new Shop("Old Quarters", "../../assets/imgs/thumbnail/Shopping/crop.jpg", "$$", "Platsen 31, 0541 Oslo", 2),
      new Shop("ExStatic Mall", "../../assets/imgs/thumbnail/Shopping/crop1.jpg", "$$", "Platsen 31, 0541 Oslo", 3),
      new Shop("Wing Market", "../../assets/imgs/thumbnail/Shopping/crop2.jpg", "$$", "Platsen 31, 0541 Oslo", 4),
      new Shop("Up Close", "../../assets/imgs/thumbnail/Shopping/crop3.jpg", "$$$", "Platsen 31, 0541 Oslo", 3),
      new Shop("Nessity Mall", "../../assets/imgs/thumbnail/Shopping/crop4.jpg", "$$$$", "Platsen 31, 0541 Oslo", 5),
      new Shop("Kowloon Street", "../../assets/imgs/thumbnail/Shopping/crop5.jpg", "$", "Platsen 31, 0541 Oslo", 3)

    ];
    function Shop(name: string, image: string, price: string, location: string, rating: number) {
      this.name = name;
      this.image = image;
      this.price = price;
      this.location = location;
      this.rating = rating;
    }
  }

}
