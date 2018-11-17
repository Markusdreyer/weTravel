import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchAllPage } from './search-all';

@NgModule({
  declarations: [
    SearchAllPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchAllPage),
  ],
})
export class SearchAllPageModule {}
