import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Dto } from '../home/Dto';

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
  products: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.products = [
      new Product("Golf Course", "./../assets/imgs/thumbnail/Activities/crop1.jpg", "$$$", "Platsen 31,", "0541 Oslo", "5", "09-18"),
      new Product("Souterrain", "../../assets/imgs/thumbnail/Restaurant/crop.jpg", "$$$$", "Fossveien 7,", "0551 Oslo", "3", "09-18"),
      new Product("Castle Tour", "./../assets/imgs/thumbnail/Activities/crop.jpg", "$$", "Platsen 31,", "0541 Oslo", "3", "09-18"),
      new Product("Tom Lavender", "../../assets/imgs/thumbnail/Restaurant/crop1.jpg", "$", "Konvallveien 23,", "1921 Oslo", "4", "09-18"),
    ];
  }

  navigateToPage(pageName, product) {
    let dto = new Dto(product.name, product.image, product.price, product.location, product.zip, product.rating, product.hours);
    this.navCtrl.push(pageName, {
      data: dto
    });
  }
}

function Product(name: string, image: string, price: string, location: string, zip: string, rating: string, hours: string) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.zip = zip;
  this.rating = rating;
  this.hours = hours;
}

