import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevatarjeta',
  templateUrl: './nuevatarjeta.page.html',
  styleUrls: ['./nuevatarjeta.page.scss'],
})
export class NuevatarjetaPage {

  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Accion realizada',
      message: 'Tu nueva tarjeta se encuentra en el apartado "Mis tarjetas"',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("metodopago");
          }
        }
      ]

    });

    await alert.present();
  }


}