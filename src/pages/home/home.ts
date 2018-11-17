import { Component } from "@angular/core";
import { NavController, IonicPage, NavParams } from "ionic-angular";
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
  user: string;

  constructor(public navCtrl: NavController, 
    private navParams:NavParams) {
    generateRandom();
    this.restaurants = [
      new Restaurant("Souterrain", "../../assets/imgs/thumbnail/Restaurant/crop.jpg", "$$$", "Fossveien 7,", "0551 Oslo", "3", "15-22:30"),
      new Restaurant("Tom Lavender", "../../assets/imgs/thumbnail/Restaurant/crop1.jpg", "$", "Kavringen Brygge 123,", "0150 Oslo", "4", "16-24"),
      new Restaurant("Upkvikking", "../../assets/imgs/thumbnail/Restaurant/crop2.jpg", "$$$", "Stranden 31", "0150 Oslo", "1", "10-23"),
      new Restaurant("Supreme Roast", "../../assets/imgs/thumbnail/Restaurant/crop3.jpg", "$$", "Konvallveien 23,", "1921 Oslo", "4", "14-23"),
      new Restaurant("Luova Hangout", "../../assets/imgs/thumbnail/Restaurant/crop4.jpg", "$", "Karl Johans Gate 31,", "0180 Oslo", "5", "16-22:30"),
      new Restaurant("Baker Svansen", "../../assets/imgs/thumbnail/Restaurant/crop5.jpg", "$$$", "Carl Berners Plass 12,", "3121 Oslo", "3", "06-18")

    ];

    this.shops = [
      new Shop("Old Quarters", "../../assets/imgs/thumbnail/Shopping/crop.jpg", "$$", "Plassen 1,", "0010 Oslo", "2", "09-20"),
      new Shop("ExStatic Mall", "../../assets/imgs/thumbnail/Shopping/crop1.jpg", "$$", "Dronning Eufemiasgate 7,", "0541 Oslo", "3", "10-19"),
      new Shop("Wing Market", "../../assets/imgs/thumbnail/Shopping/crop2.jpg", "$$", "Karl Johans Gate 312,", "0190 Oslo", "4", "10-20"),
      new Shop("Up Close", "../../assets/imgs/thumbnail/Shopping/crop3.jpg", "$$$", "Kavringen Brygge 11,", "0910 Oslo", "3", "09-20"),
      new Shop("Nessity Mall", "../../assets/imgs/thumbnail/Shopping/crop4.jpg", "$$$", "Kongens Plass 11,", "0190 Oslo", "5", "10-21"),
      new Shop("Kowloon Street", "../../assets/imgs/thumbnail/Shopping/crop5.jpg", "$", "Passasjen 3,", "0103 Oslo", "3", "12-22")

    ];

    this.activities = [
      new Activity("Castle Tour", "./../assets/imgs/thumbnail/Activities/crop.jpg", "$$", "Slottets Gate 1,", "0101 Oslo", "3", "09-21"),
      new Activity("Golf Course", "./../assets/imgs/thumbnail/Activities/crop1.jpg", "$$$", "Golfen 27,", "0550 Oslo", "5", "09-20"),
      new Activity("Climbing Course", "./../assets/imgs/thumbnail/Activities/crop2.jpg", "$$$$", "Klatreveggen 31,", "0919 Oslo", "4", "09-21"),
      new Activity("Holmenkollen", "./../assets/imgs/thumbnail/Activities/crop3.jpg", "$$", "Holmenkollen", "0345 Oslo", "3", "09-21"),
      new Activity("Tryvann Snowboarding", "./../assets/imgs/thumbnail/Activities/crop4.jpg", "$$$", "Tryvann 3,", "1023 Tryvann", "5", "09-22")
    ];

    this.featured = [
      this.restaurants[this.randomNumbers[0]],
      this.shops[this.randomNumbers[1]],
      this.activities[this.randomNumbers[2]],
      this.activities[this.randomNumbers[3]]
    ];

    this.user = ' ' + this.navParams.get('user');

  }

  navigateToPage(pageName, product) {
    let dto = new Dto(product.name, product.image, product.price, product.location, product.zip, product.rating, product.hours);
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

function Restaurant(name: string, image: string, price: string, location: string, zip: string, rating: string, hours: string) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.zip = zip;
  this.rating = rating;
  this.hours = hours;
}

function Shop(name: string, image: string, price: string, location: string, zip: string, rating: string, hours: string) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.zip = zip;
  this.rating = rating;
  this.hours = hours;
}

function Activity(name: string, image: string, price: string, location: string, zip: string, rating: string, hours: string) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.zip = zip;
  this.rating = rating;
  this.hours = hours;
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







