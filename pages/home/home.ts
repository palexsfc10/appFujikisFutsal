import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import ArtilhariaPage from '../artilharia/artilharia';
//import { ArtilhariaPage } from '../artilharia/artilharia';

import { IHome } from '../../interfaces/IHome'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: IHome[] = [
    
    { 
      id:1,
      titulo:"Fujikis Futsal desde 1998",
      descricao:"",
      imagem:"https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-9/61550780_1296831873788586_4730134288668819456_n.jpg?_nc_cat=101&_nc_oc=AQkf_5VO8xCNwkAH1trtpl3yGrIllc4QBRcG4_IzVNd2IWCp1Ru0cNg8EPSgzBeg2Lg&_nc_ht=scontent.fudi1-2.fna&oh=a5d0f22cdf69e7072fe17ea74c301351&oe=5E169A58"}
  
  ];

  constructor(public navCtrl: NavController) {

  }

  abreHistoria(item){
    this.navCtrl.push(ArtilhariaPage, {dados:item});
  }
  //abreArtilharia(){
  //  this.navCtrl.push(ArtilhariaPage);
  //}


}
