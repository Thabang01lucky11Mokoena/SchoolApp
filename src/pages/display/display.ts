import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Task } from '../../app/Task';
import EmpArr from '../../app/Array';
import { HomePage } from '../home/home';
import {SignInPage} from '../../pages/sign-in/sign-in';


/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  
  signUparr2=[];
  signUparr = this.signUparr2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  onSearch(event){
    console.log(event.target.value);
  }

  Display(UserName, LastName, StudentNo){
    if ( UserName != "" && LastName != "" && StudentNo != ""){
      let emp = new Task(UserName, LastName, StudentNo)
      this.signUparr2.push(emp)
      console.log(this.signUparr)
    } else if( UserName != null && LastName != null && StudentNo != null){
      const alert = this.alertCtrl.create({
        title: 'Student Detals!',
        subTitle: 'Please enter student details!',
        buttons: ['OK']
      });
      alert.present();
    }
  }
 // Deleting method
 methodDelete(a){
  this.signUparr2.splice(a,1);
}

update(i,newUserName,newLastName,newStudentNo){
  let oldUserName = this.signUparr2[i].newUserName;
  let oldLastName =this.signUparr2[i].newLastName;
  let oldStudentNo = this.signUparr2[i].newStudentNo;

  if (newUserName != null && newLastName != null && newStudentNo != null){
    let emp = new Task(newUserName,newLastName,newStudentNo);
    this.signUparr2[i] = emp;
   
  }
  else if(newUserName != null){
    let emp = new Task(oldUserName,newLastName,newStudentNo)
    this.signUparr2[i] = emp;
  }
  else if(newLastName != null){
    let emp = new Task(newUserName,oldLastName,newStudentNo)
    this.signUparr2[i] = emp;
  }
  else if(newStudentNo != null){
    let emp = new Task(newUserName,newLastName,oldStudentNo)
    this.signUparr2[i] = emp;
  }
  

}
}
