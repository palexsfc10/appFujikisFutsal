import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArtilharia } from '../../interfaces/IArtilharia';

/*
  Generated class for the ArtilhariaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArtilhariaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ArtilhariaProvider Provider');
  }

  all(){

   let lista: IArtilharia[] = [
    
      { 
        id:10,
        nome:"Palex",
        camisa:4,
        gols:0,
        assistencias:2
      }
      
    ];

    return lista;

  }
  
}
