import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarperfilconductor',
  templateUrl: './editarperfilconductor.page.html',
  styleUrls: ['./editarperfilconductor.page.scss'],
})
export class EditarperfilconductorPage {

  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Estas seguro que esos son tus nuevos datos?',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
          }
        }, {
          text: 'Cancelar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]

    });

    await alert.present();
  }

}