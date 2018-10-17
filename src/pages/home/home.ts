import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage() //Fala pra aplicação que a classe HomePage é uma pagina e que podera ser referenciada entre aspas, na forma de String. 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html' //Define qual arquivo Html esta sendo controlado
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
