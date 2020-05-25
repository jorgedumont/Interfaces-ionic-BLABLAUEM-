import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes-conductor',
  templateUrl: './viajes-conductor.page.html',
  styleUrls: ['./viajes-conductor.page.scss'],
})
export class ViajesConductorPage {

  constructor(public alertController: AlertController,private router: Router) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Estas seguro que quieres cancelar el viaje? Hay pasajeros que dependen de ti.',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
          }
        }, {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]

    });

    await alert.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
