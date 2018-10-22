import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  //Lists of attractions
  restaurants: any[];
  shops: any[];
  activities: any[];

  constructor(public navCtrl: NavController) {
    this.restaurants = [
      new Restaurant("WonderBurger", "../../assets/imgs/ceviche_0.jpg"),
      new Restaurant("PeacePasta", "../../assets/imgs/buzara.jpg"),
      new Restaurant("CheapChilli", "../../assets/imgs/lomo.jpg"),
      new Restaurant("CheapChilli", "../../assets/imgs/thumb_beef_hearts.jpg")
    ];

    this.shops = [
      new Shop("Antiques", "../../assets/imgs/antiques.jpg"),
      new Shop("Books", "../../assets/imgs/books.jpg"),
      new Shop("Music", "../../assets/imgs/music.jpeg"),
      new Shop("Luxury", "../../assets/imgs/luxury.jpeg")
    ];

    this.activities = [
      new Activity("Driving", "../../assets/imgs/drive.jpeg"),
      new Activity("Biking", "../../assets/imgs/bike.jpeg"),
      new Activity("Football", "../../assets/imgs/football.jpeg"),
      new Activity("Golfing", "../../assets/imgs/golf.jpg")
    ];
  }

  navigateToPage(pageName) {
    this.navCtrl.push(pageName);
    console.log(pageName);
  }

  //Enables back swipe navigation when leaving HomePage
  public ionViewDidLeave(): void {
    this.navCtrl.swipeBackEnabled = true;
    console.log(
      "IonViewDidLeave\n" + "swipeBackEnabled:" + this.navCtrl.swipeBackEnabled
    );
  }

  //Disables back swipe navigation while on HomePage to not be able to swipe back to login screen
  public ionViewDidEnter(): void {
    this.navCtrl.swipeBackEnabled = false;
    console.log(
      "IonViewDidEnter\n" + "swipeBackEnabled:" + this.navCtrl.swipeBackEnabled
    );
  }
}

function Restaurant(name: string, image: string) {
  this.name = name;
  this.image = image;
}

function Shop(name: string, image: string) {
  this.name = name;
  this.image = image;
}

function Activity(name: string, image: string) {
  this.name = name;
  this.image = image;
}
