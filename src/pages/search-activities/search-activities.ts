import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-activities',
  templateUrl: 'search-activities.html',
})
export class SearchActivitiesPage {
  activities: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activities = [
      new Activity("Castle Tour", "./../assets/imgs/thumbnail/Activities/crop.jpg", "$$", "Slottets Gate 1, 0101 Oslo", 3),
      new Activity("Golf Course", "./../assets/imgs/thumbnail/Activities/crop1.jpg", "$$$", "Golfen 27, 0550 Oslo", 5),
      new Activity("Climbing Course", "./../assets/imgs/thumbnail/Activities/crop2.jpg", "$", "Klatreveggen 31, 0919 Oslo", 4),
      new Activity("Holmenkollen", "./../assets/imgs/thumbnail/Activities/crop3.jpg", "$$", "Holmenkollen, Oslo, Norway", 3),
      new Activity("Tryvann Snowboarding", "./../assets/imgs/thumbnail/Activities/crop4.jpg", "$$$", "Tryvann 3, 1023 Tryvann", 5)
    ];

    function Activity(name: string, image: string, price: string, location: string, rating: number) {
      this.name = name;
      this.image = image;
      this.price = price;
      this.location = location;
      this.rating = rating;
    }
  }

}
