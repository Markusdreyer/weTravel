import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
//import { LoginPage } from '../pages/login/login';
//import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,

    //LoginPage,
    //HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
<<<<<<< HEAD
    MyApp,
=======
    MyApp
>>>>>>> 5637112b16e407f27f890c316796aaa930db2a4f
    //LoginPage,
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
