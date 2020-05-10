import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevocoche',
  templateUrl: './nuevocoche.page.html',
  styleUrls: ['./nuevocoche.page.scss'],
})
export class NuevocochePage {

  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Accion realizada',
      message: 'Tu nuevo vehiculo se ha registrado correctamente',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("listacoches");
          }
        }
      ]

    });

    await alert.present();
  }


}