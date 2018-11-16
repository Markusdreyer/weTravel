import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { StarRatingModule } from 'ionic3-star-rating'

@NgModule({
  declarations: [
    DetailPage,

  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    StarRatingModule
  ],
})
export class DetailPageModule { }
