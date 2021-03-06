import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DescriptionPage } from '../pages/description/description';
import { InvestigationsfilterPage } from '../pages/Investigationsfilter/investigationsfilter';
import { DetailsPage } from '../pages/details/details';

import { timer } from 'rxjs/observable/timer';
import { flatten } from '../../node_modules/@angular/compiler';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
   
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Categorias', component: InvestigationsfilterPage },
      { title: 'Departamento', component: InvestigationsfilterPage },
      { title: 'Municipio', component: InvestigationsfilterPage },
      { title: 'Salir', component: HomePage }
    ];

  }

  initializeApp() {
    //debugger;
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer (2000).subscribe(()=> this.showSplash = false);
      //debugger;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
