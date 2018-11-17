import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchShoppingPage } from './search-shopping';

@NgModule({
  declarations: [
    SearchShoppingPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchShoppingPage),
  ],
})
export class SearchShoppingPageModule {}
