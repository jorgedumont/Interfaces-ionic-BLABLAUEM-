import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservapasajero',
  templateUrl: './reservapasajero.page.html',
  styleUrls: ['./reservapasajero.page.scss'],
})
export class ReservapasajeroPage {

  constructor(public alertController: AlertController,private router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Reserva efectuada correctamente',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            
          }
        }
      ]

    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Reserva denegada correctamente',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log();
            
          }
        }
      ]

    });

    await alert.present();
  }

}

