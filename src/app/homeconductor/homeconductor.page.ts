import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homeconductor',
  templateUrl: './homeconductor.page.html',
  styleUrls: ['./homeconductor.page.scss'],
})
export class HomeconductorPage {

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
            this.router.navigateByUrl("tabs2/tab3");
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

