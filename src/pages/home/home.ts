import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  restaurants: any[];
  shops: any[];

  constructor(public navCtrl: NavController) {
    this.restaurants = [
      new Restaurant("WonderBurger", "../../assets/imgs/ceviche_0.jpg"),
      new Restaurant("PeacePasta", "../../assets/imgs/buzara.jpg"),
      new Restaurant("CheapChilli", "../../assets/imgs/lomo.jpg"),
      new Restaurant("CheapChilli", "../../assets/imgs/thumb_beef_hearts.jpg")
    ];

    this.shops = [
      new Shop("Gucci", "../../assets/imgs/ceviche_0.jpg"),
      new Shop("Louis Vuitton", "../../assets/imgs/buzara.jpg"),
      new Shop("Sara", "../../assets/imgs/lomo.jpg"),
      new Shop("Follestad", "../../assets/imgs/thumb_beef_hearts.jpg")
    ];
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
