import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopsPage } from './shops';

@NgModule({
  declarations: [
    ShopsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopsPage),
  ],
})
export class ShopsPageModule {}
