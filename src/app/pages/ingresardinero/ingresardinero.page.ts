import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingresardinero',
  templateUrl: './ingresardinero.page.html',
  styleUrls: ['./ingresardinero.page.scss'],
})
export class IngresardineroPage{

  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ingreso recibido',
      message: 'Tu sueldo ha sido ingresado a tu cuenta',
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


}