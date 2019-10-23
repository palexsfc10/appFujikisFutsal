import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IArtilharia } from '../../interfaces/IArtilharia';
import { ArtilhariaProvider } from '../../providers/artilharia/artilharia';

/**
 * Generated class for the ArtilhariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artilharia',
  templateUrl: 'artilharia.html',
})
export default class ArtilhariaPage {

  lista: IArtilharia[];

  //constructor(public navCtrl: NavController,  public artilhariaProvider: ArtilhariaProvider) {
    constructor(public navCtrl: NavController, public navParams: NavParams, public artilhariaProvider: ArtilhariaProvider) {
      this.lista = this.artilhariaProvider.all();



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtilhariaPage');
  }

}
