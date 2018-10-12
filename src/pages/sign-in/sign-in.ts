import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DisplayPage } from '../display/display';


/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  name = "lucky";
  password = "lucky";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
students(name, password){
  if (name == "lucky" && password == "lucky"){
    this.navCtrl.push(DisplayPage)
  }
  else{
      const alert = this.alertCtrl.create({
        title: 'Wrong Password',
        subTitle: 'Please enter correct password',
        buttons: ['OK']
      })
      alert.present();
    }

  }
}

