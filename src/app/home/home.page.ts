import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Estas seguro que aceptas los terminos y condiciones?',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("usuario-conductor");
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
