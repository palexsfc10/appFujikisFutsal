import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import ArtilhariaPage from '../pages/artilharia/artilharia';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { ArtilhariaProvider } from '../providers/artilharia/artilharia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    ArtilhariaPage,
    CadastroPage
    
   ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,  
    HomePage,
    HistoriaPage,
    ArtilhariaPage,
    CadastroPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArtilhariaProvider
  ]
})
export class AppModule {}
