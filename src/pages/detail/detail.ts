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
  product: Dto;
  gallery: any[];
  reviews: any[];
  bookmarked: boolean = false;
  bookmarkText: string = "Bookmark";

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public events: Events,
    public toastCtrl:ToastController) {
    this.product = navParams.get('data');
    console.log(this.product);

    this.gallery = [
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop1.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop2.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop3.jpg",
      "../../assets/imgs/thumbnail/Restaurant/gallery/crop4.jpg"
    ]
  }

  bookmark() {
    this.events.publish('product', this.product);
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
}
