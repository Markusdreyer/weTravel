import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-restaurant',
  templateUrl: 'search-restaurant.html',

})
export class SearchRestaurantPage {
  restaurants: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restaurants = [
      new Restaurant("Souterrain", "../../assets/imgs/thumbnail/Restaurant/crop.jpg", "$$$$", "Fossveien 7, 0551 Oslo", 3),
      new Restaurant("Tom Lavender", "../../assets/imgs/thumbnail/Restaurant/crop1.jpg", "$", "Konvallveien 23, 1921 Oslo", 4),
      new Restaurant("Upkvikking", "../../assets/imgs/thumbnail/Restaurant/crop2.jpg", "$$$", "Platsen 31, 0541 Oslo", 1),
      new Restaurant("Supreme Roast", "../../assets/imgs/thumbnail/Restaurant/crop3.jpg", "$$", "Konvallveien 23, 1921 Oslo", 4),
      new Restaurant("Luova Hangout", "../../assets/imgs/thumbnail/Restaurant/crop4.jpg", "$", "Platsen 31, 0541 Oslo", 5),
      new Restaurant("Baker Svansen", "../../assets/imgs/thumbnail/Restaurant/crop5.jpg", "$$$", "Carld Berner 12, 3121 Oslo", 3)

    ];
    function Restaurant(name: string, image: string, price: string, location: string, rating: number) {
      this.name = name;
      this.image = image;
      this.price = price;
      this.location = location;
      this.rating = rating;
    }
  }


}
