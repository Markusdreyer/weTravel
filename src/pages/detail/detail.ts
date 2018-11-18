import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Dto } from '../home/Dto';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  testProduct = {};
  product: Dto;
  gallery: any[];
  reviews: any[];
  bookmarked: boolean = false;
  bookmarkText: string = "Bookmark";


  comments: any[];
  authour: string;
  timestamp: string;
  message: string;
  profileImg: string;
  rating: number;
  featured: any[];
  public show: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public events: Events,
    public toastCtrl: ToastController) {
    this.product = navParams.get('data');

    this.gallery = [
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop1.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop2.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop3.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop4.jpg"
    ];

    this.featured = [
      new Feature("Castle Tour", "./../assets/imgs/thumbnail/Activities/crop.jpg", "$$$", "Slottets Gate 1,", "0101 Oslo", "3", "09-21"),
      new Feature("Climbing Course", "./../assets/imgs/thumbnail/Activities/crop2.jpg", "$$$$", "Klatreveggen 31,", "0919 Oslo", "4", "09-21"),
      new Feature("Nessity Mall", "../../assets/imgs/thumbnail/Shopping/crop4.jpg", "$$$", "Kongens Plass 11,", "0190 Oslo", "5", "10-21"),
      new Feature("Luova Hangout", "../../assets/imgs/thumbnail/Restaurant/crop4.jpg", "$$$", "Karl Johans Gate 31,", "0180 Oslo", "5", "16-22:30"),

    ];

    this.comments = [
      new Comment('Ivonne Steil', '1. November 2018', 'We went over to ' + this.product.name + ' after landing in Oslo, and we were dying for a good meal! Our hotel was just down the street from ' + this.product.name + ' and so we decided to go give it a shot! (...)', 'assets/imgs/detail/comments/image-23.png', 5),
      new Comment('Bernard Perkin', '14. March 2015', 'For the uninitiated, there is the ' + this.product.name + '. I highly recommend going to the (...) ', 'assets/imgs/detail/comments/image-7.png', 4),
      new Comment('Sharen Marquart', '23. August 2017', 'The award of Oslo\'s worst Cappuccino goes to ' + this.product.name + '. It takes a special kind of skill to mess up coffee this much.', 'assets/imgs/detail/comments/image-44.png', 1)
    ];
  }

  bookmark() {
    this.bookmarked = !this.bookmarked;
    let toast = this.toastCtrl.create({
      duration: 2000,
      position: 'top'
    });
    if (this.bookmarked === true) {
      this.bookmarkText = "Unmark";
      toast.setMessage('Added \"' + this.product.name + '\" to your bookmarks');
    } else {
      this.bookmarkText = "Bookmark";
      toast.setMessage('Removed \"' + this.product.name + '\" from your bookmarks');
    }
    toast.present();
  }

  navigateToPage(pageName, product) {
    let dto = new Dto(product.name, product.image, product.price, product.location, product.zip, product.rating, product.hours);
    this.navCtrl.push(pageName, {
      data: dto
    });
  }

  tooltip() {
    if (this.show == false) {
      this.show = true;
    } else { this.show = false }
  }
}

function Feature(name: string, image: string, price: string, location: string, zip: string, rating: string, hours: string) {
  this.name = name;
  this.image = image;
  this.price = price;
  this.location = location;
  this.zip = zip;
  this.rating = rating;
  this.hours = hours;
}


function Comment(
  authour: string,
  timestamp: string,
  message: string,
  profileImg: string,
  rating: number) {
  this.author = authour;
  this.timestamp = timestamp;
  this.message = message;
  this.profileImg = profileImg;
  this.rating = rating;
}