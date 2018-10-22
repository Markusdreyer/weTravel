import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-restaurants",
  templateUrl: "restaurants.html"
})
export class RestaurantsPage {
  restaurants: any[];

  //Images are temporary low resolution
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restaurants = [
      new Restaurant(
        "WonderBurger",
        "../../assets/imgs/restaurants/restaurant1.jpg"
      ),
      new Restaurant(
        "PeacePasta",
        "../../assets/imgs/restaurants/restaurant2.jpg"
      ),
      new Restaurant(
        "CheapChilli",
        "../../assets/imgs/restaurants/restaurant3.jpg"
      ),
      new Restaurant(
        "PerfectPizza",
        "../../assets/imgs/restaurants/restaurant4.jpg"
      ),
      new Restaurant(
        "CodeinCod",
        "../../assets/imgs/restaurants/restaurant5.jpg"
      ),
      new Restaurant(
        "LivelyLemons",
        "../../assets/imgs/restaurants/restaurant6.jpg"
      ),
      new Restaurant(
        "HighHazel",
        "../../assets/imgs/restaurants/restaurant7.jpg"
      ),
      new Restaurant(
        "WildWilly",
        "../../assets/imgs/restaurants/restaurant8.jpg"
      )
    ];
  }
}

//TODO: Add distance(?)
function Restaurant(name: string, image: string) {
  this.name = name;
  this.image = image;
}
