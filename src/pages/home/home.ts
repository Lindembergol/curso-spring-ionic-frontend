import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage() //Fala pra aplicação que a classe HomePage é uma pagina e que podera ser referenciada entre aspas, na forma de String. 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html' //Define qual arquivo Html esta sendo controlado
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

    

  }

  ionViewWillEnter(){ //Quando a pagina for carregada, desabilita o menu

    this.menu.swipeEnable(false);

  }

  ionViewDidLeave(){ ////Quando sair da pagina, habilita o menu
    
    this.menu.swipeEnable(true);

  }

  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
