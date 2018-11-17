import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, Toast } from "ionic-angular";
import { HomePage } from "../home/home";
import { MainPage } from "..";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",

})
export class LoginPage {
  HomePage: HomePage;
  userVal: string = '';

  public login: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      user: ['', Validators.required]
    });
  }

  navigateToPage() {
    this.userVal = this.login.value.user;
    this.navCtrl.push(MainPage, {
      data: this.userVal
    });
    //console.log(this.userVal)
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Authenticating...',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed login notice');
    });



    toast.present();
    setTimeout(() => {
      toast.setMessage('Logged in!');
      toast.setDuration(2000);
    }, 1000);

  }


}


