import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  activities: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activities = [
      new Activity("Driving", "../../assets/imgs/drive.jpeg"),
      new Activity("Biking", "../../assets/imgs/bike.jpeg"),
      new Activity("Football", "../../assets/imgs/football.jpeg"),
      new Activity("Golfing", "../../assets/imgs/golf.jpg")
    ];

  }

}

function Activity(name: string, image: string) {
  this.name = name;
  this.image = image;
}