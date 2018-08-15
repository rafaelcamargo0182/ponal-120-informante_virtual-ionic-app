import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mobiscroll } from '@mobiscroll/angular';
import { AlertController } from 'ionic-angular';
import { PlistarcasosProvider } from '../../providers/plistarcasos/plistarcasos';

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html'
})
export class DescriptionPage {
  //formSettings = {
    //theme: 'material'
  //};
  idCaso
  investigation
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public provedor:PlistarcasosProvider) {    
    this.idCaso = navParams.get("idCaso");
  }

  ionViewDidLoad(){    
    console.log('ionViewDidLoad: ' + this.idCaso);
    this.provedor.GetInvestigation(this.idCaso)
    .subscribe(
      (data)=>{this.investigation=data;},
      (error)=>{console.log(error);}
    )
    //console.log('ionViewDidLoad: ' + this.investigation);
  }

  showAlert() {
    debugger;
    mobiscroll.alert({
        title: 'Señor Ciudadano',
        message: '"Recuerde"envié la información que considere relevante para el esclarecimiento de los hechos.',
        callback: function () {
            mobiscroll.toast({
                message: 'Alert closed'
            });
        }
    });
  } 
  
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Señor Ciudadano',
      subTitle: 'Recuerde envié la información que considere relevante para el esclarecimiento de los hechos.',
      buttons: ['Enterado(a)']
    });
    alert.present();
  }

}