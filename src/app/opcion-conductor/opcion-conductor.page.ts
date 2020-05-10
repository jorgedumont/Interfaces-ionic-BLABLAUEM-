import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcion-conductor',
  templateUrl: './opcion-conductor.page.html',
  styleUrls: ['./opcion-conductor.page.scss'],
})
export class OpcionConductorPage {

  constructor(public alertController: AlertController,private router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Enviado correctamente',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("lista-conductores");/*  */
          }
        }
      ]

    });
    

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Quieres realizar la reserva?',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("lista-conductores");/*  */
          }
        }
      ]

    });
    

    await alert.present();
  }


}


