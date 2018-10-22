import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  restaurants: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restaurants = [
      new Restaurant("WonderBurger", "../../assets/imgs/ceviche_0.jpg"),
      new Restaurant("PeacePasta", "../../assets/imgs/buzara.jpg"),
      new Restaurant("CheapChilli", "../../assets/imgs/lomo.jpg"),
      new Restaurant("CheapChilli", "../../assets/imgs/thumb_beef_hearts.jpg")
    ];
  }
}

function Restaurant(name: string, image: string) {
  this.name = name;
  this.image = image;
}