import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchRestaurantPage } from './search-restaurant';

@NgModule({
  declarations: [
    SearchRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchRestaurantPage),
  ],
})
export class SearchRestaurantPageModule {}
