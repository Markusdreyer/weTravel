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
  
  
  comments:any[];
  authour:string;
  timestamp:string;
  message:string;
  profileImg:string;
  rating:number;
  public show: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public events: Events,
    public toastCtrl:ToastController) {
    this.product = navParams.get('data');

    this.gallery = [
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop1.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop2.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop3.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop4.jpg"
    ];

    this.comments = [
      new Comment('Ivonne Steil','1. November 2018', 'We went over to ' + this.product.name + ' after landing in Oslo, and we were dying for a good meal! Our hotel was just down the street from ' + this.product.name + ' and so we decided to go give it a shot! (...)','assets/imgs/detail/comments/image-23.png',5),
      new Comment('Bernard Perkin','14. March 2015', 'For the uninitiated, there is the ' + this.product.name + '. I highly recommend going to the (...) ','assets/imgs/detail/comments/image-7.png',4),
      new Comment('Sharen Marquart','23. August 2017', 'The award of Oslo\'s worst Cappuccino goes to ' + this.product.name + '. It takes a special kind of skill to mess up coffee this much.','assets/imgs/detail/comments/image-44.png',1)
    ];
  }

  bookmark() {
    this.bookmarked = !this.bookmarked;
    let toast = this.toastCtrl.create({
      duration:2000,
      position: 'top'
    });
    if (this.bookmarked === true) {
      this.bookmarkText = "Unmark";
      toast.setMessage('Added \"'+ this.product.name +'\" to your bookmarks');
    } else {
      this.bookmarkText = "Bookmark";
      toast.setMessage('Removed \"'+ this.product.name +'\" from your bookmarks');
    } 
  toast.present();
  }



  tooltip() {
    if (this.show == false) {
    this.show = true;
  } else {this.show = false}
}
}


function Comment(
  authour:string,
  timestamp:string,
  message:string,
  profileImg:string,
  rating:number) {
  this.author = authour;
  this.timestamp = timestamp;
  this.message = message;
  this.profileImg = profileImg;
  this.rating = rating;
}