import { BookmarksPage } from './../bookmarks/bookmarks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public navParams: NavParams) {
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
    this.bookmarked = !this.bookmarked;
    if (this.bookmarked === true) {
      this.bookmarkText = "Unmark";
    } else {
      this.bookmarkText = "Bookmark";
    }
    let Dto = this.product;
    this.navCtrl.push(BookmarksPage, {
      data: Dto
    })
  }
}
