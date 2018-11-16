import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, Toast } from "ionic-angular";
import { HomePage } from "../home/home";
import { MainPage } from "..";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  HomePage: HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {}

  navigateToPage() {
    this.navCtrl.push(MainPage);
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Authenticating...',
      duration:3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed login notice');
    });
  
  
  
  toast.present();
  setTimeout(() => {
    toast.setMessage('Logged in!');
    toast.setDuration(2000);
  },1000);
  
}

}


