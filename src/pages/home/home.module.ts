import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { StarRatingModule } from 'ionic3-star-rating'
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }
