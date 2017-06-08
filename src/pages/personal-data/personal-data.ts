import { Component } from '@angular/core';
import {farewellPage} from '../farewell/farewell';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data',
  templateUrl: 'personal-data.html'
})

export class PersonalDataPage {

  constructor(public navCtrl: NavController) {

  }
  goToPersonalFarewellPage(){
    this.navCtrl.push(farewellPage)
  }
}
