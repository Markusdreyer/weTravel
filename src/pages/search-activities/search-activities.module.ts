import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchActivitiesPage } from './search-activities';

@NgModule({
  declarations: [
    SearchActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchActivitiesPage),
  ],
})
export class SearchActivitiesPageModule {}
