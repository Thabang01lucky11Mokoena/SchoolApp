import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayPage} from '../../pages/display/display';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
logIn(){
  this.navCtrl.push(SignInPage)
}
}
