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
      new Restaurant("Den glade gris", "../../assets/imgs/thumbnail/denGladeGrisPlaceholder.jpeg", "$$$$", "Fossveien 7, 0551 Oslo", 3),
      new Restaurant("Edda", "../../assets/imgs/thumbnail/restaurantEddaPlaceholder.jpeg", "$$$", "Carld Berner 12, 3121 Oslo", 2),
      new Restaurant("CheapChilli", "../../assets/imgs/restaurants/restaurant3.jpg", "$", "Konvallveien 23, 1921 Oslo", 4),
      new Restaurant("BoulderBass", "../../assets/imgs/restaurants/restaurant4.jpg", "$$", "Platsen 31, 0541 Oslo", 1)
    ];

    this.shops = [
      new Shop("Antiques", "../../assets/imgs/antiques.jpg", "$$", "Platsen 31, 0541 Oslo", 1),
      new Shop("Books", "../../assets/imgs/books.jpg", "$$", "Platsen 31, 0541 Oslo", 1),
      new Shop("Music", "../../assets/imgs/music.jpeg", "$$", "Platsen 31, 0541 Oslo", 1),
      new Shop("Luxury", "../../assets/imgs/luxury.jpeg", "$$", "Platsen 31, 0541 Oslo", 1)
    ];

    this.activities = [
      new Activity("Driving", "../../assets/imgs/drive.jpeg", "$$", "Platsen 31, 0541 Oslo", 1),
      new Activity("Biking", "../../assets/imgs/bike.jpeg", "$$", "Platsen 31, 0541 Oslo", 1),
      new Activity("Football", "../../assets/imgs/football.jpeg", "$$", "Platsen 31, 0541 Oslo", 1),
      new Activity("Golfing", "../../assets/imgs/golf.jpg", "$$", "Platsen 31, 0541 Oslo", 1)
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







