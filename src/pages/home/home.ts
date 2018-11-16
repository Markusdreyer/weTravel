import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { Dto } from "./Dto";


@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  //Lists of attractions
  restaurants: any[];
  shops: any[];
  activities: any[];
  featured: any[];
  randomNumbers = generateRandom();

  constructor(public navCtrl: NavController) {
    generateRandom();
    this.restaurants = [
      new Restaurant("Souterrain", "../../assets/imgs/thumbnail/Restaurant/crop.jpg", "$$$$", "Fossveien 7, 0551 Oslo", 3),
      new Restaurant("Tom Lavender", "../../assets/imgs/thumbnail/Restaurant/crop1.jpg", "$", "Konvallveien 23, 1921 Oslo", 4),
      new Restaurant("Upkvikking", "../../assets/imgs/thumbnail/Restaurant/crop2.jpg", "$$$", "Platsen 31, 0541 Oslo", 1),
      new Restaurant("Supreme Roast", "../../assets/imgs/thumbnail/Restaurant/crop3.jpg", "$$", "Konvallveien 23, 1921 Oslo", 4),
      new Restaurant("Luova Hangout", "../../assets/imgs/thumbnail/Restaurant/crop4.jpg", "$", "Platsen 31, 0541 Oslo", 5),
      new Restaurant("Baker Svansen", "../../assets/imgs/thumbnail/Restaurant/crop5.jpg", "$$$", "Carld Berner 12, 3121 Oslo", 3)

    ];

    this.shops = [
      new Shop("Old Quarters", "../../assets/imgs/thumbnail/Shopping/crop.jpg", "$$", "Platsen 31, 0541 Oslo", 2),
      new Shop("ExStatic Mall", "../../assets/imgs/thumbnail/Shopping/crop1.jpg", "$$", "Platsen 31, 0541 Oslo", 3),
      new Shop("Wing Market", "../../assets/imgs/thumbnail/Shopping/crop2.jpg", "$$", "Platsen 31, 0541 Oslo", 4),
      new Shop("Up Close", "../../assets/imgs/thumbnail/Shopping/crop3.jpg", "$$$", "Platsen 31, 0541 Oslo", 3),
      new Shop("Nessity Mall", "../../assets/imgs/thumbnail/Shopping/crop4.jpg", "$$$$", "Platsen 31, 0541 Oslo", 5),
      new Shop("Kowloon Street", "../../assets/imgs/thumbnail/Shopping/crop5.jpg", "$", "Platsen 31, 0541 Oslo", 3)

    ];

    this.activities = [
      new Activity("Castle Tour", "./../assets/imgs/thumbnail/Activities/crop.jpg", "$$", "Platsen 31, 0541 Oslo", 3),
      new Activity("Golf Course", "./../assets/imgs/thumbnail/Activities/crop1.jpg", "$$$", "Platsen 31, 0541 Oslo", 5),
      new Activity("Climbing Course", "./../assets/imgs/thumbnail/Activities/crop2.jpg", "$$$$", "Platsen 31, 0541 Oslo", 4),
      new Activity("Holmenkollen", "./../assets/imgs/thumbnail/Activities/crop3.jpg", "$$", "Platsen 31, 0541 Oslo", 3),
      new Activity("Tryvann Snowboarding", "./../assets/imgs/thumbnail/Activities/crop4.jpg", "$$$", "Platsen 31, 0541 Oslo", 5)
    ];

    this.featured = [
      this.restaurants[this.randomNumbers[0]],
      this.shops[this.randomNumbers[1]],
      this.activities[this.randomNumbers[2]],
      this.activities[this.randomNumbers[3]]
    ];
  }

  navigateToPage(pageName, product) {
    let dto = new Dto(product.name, product.image, product.price, product.location, product.rating);
    this.navCtrl.push(pageName, {
      data: dto
    });
  }

  //Enables back swipe navigation when leaving HomePage
  public ionViewDidLeave(): void {
    this.navCtrl.swipeBackEnabled = true;
  }

  //Disables back swipe navigation while on HomePage to not be able to swipe back to login screen
  public ionViewDidEnter(): void {
    this.navCtrl.swipeBackEnabled = false;
  }


}

function Restaurant(name: string, image: string, price: string, location: string, rating: number) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.rating = rating;
}

function Shop(name: string, image: string, price: string, location: string, rating: number) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.rating = rating;
}

function Activity(name: string, image: string, price: string, location: string, rating: number) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.rating = rating;
}

function generateRandom() {
  var max = 4;
  const random = [];
  for (var i = 0; i < max; i++) {
    var temp = Math.floor(Math.random() * max);
    if (random.indexOf(temp) == -1) {
      random.push(temp);
    }
    else
      i--;
  }
  return random;
}







