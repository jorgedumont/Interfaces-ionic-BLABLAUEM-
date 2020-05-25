import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepasajero',
  templateUrl: './homepasajero.page.html',
  styleUrls: ['./homepasajero.page.scss'],
})
export class HomepasajeroPage {

  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Estas seguro que quieres volver a la aplicacion?',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("tabs1/tab3");
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

