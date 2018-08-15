import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PlistarcasosProvider } from '../../providers/plistarcasos/plistarcasos';
import { FormGroup,FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-contributions',
  templateUrl: 'contributions.html',
})
export class ContributionsPage {
  resultContribution;
  resultContributionFile;
  objContrib: any[] = [];
  datos: any ={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public provider: PlistarcasosProvider, private formBuilder: FormBuilder, private imagePicker: ImagePicker) {
    this.datos = this.formBuilder.group({
      informacion:['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.presentAlert();    
  }
  
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Señor Ciudadano',
      subTitle: 'Recuerde envié la información que considere relevante para el esclarecimiento de los hechos.',
      buttons: ['Enterado(a)']
    });
    alert.present();
  }

  addContribution(id: string, txtDescription: string, txtFirstName: string, txtLastName: string, txtEmail: string, txtPhoneNumber: string){    
    let obj: Object  = {
    CONTRIBUTION_ID: 0,
    INVESTIGATION_ID: id,
    DESCRIPTION: txtDescription,
    INFORMANT_ID: 1
    }

    debugger;
    var resultado = this.provider.PostAddContributions(obj);
    
  }

  addContributionsFile(id: string, strArchivo: string){
    let obj: Object  = {
    CONTRIBUTION_FILE_ID: 0,
    CONTRIBUTION_ID: id,
    PATH: 'Documents',
    CONTENT_TYPE: 'image/jpeg',
    FILE_DOC: strArchivo
    }
    debugger;
    var resultado = this.provider.PostAddContributionFile(obj);
  }

  abrirGaleria(){
    let options: ImagePickerOptions = {
      maximumImagesCount:3
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
}
