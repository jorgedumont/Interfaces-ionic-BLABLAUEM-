import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-pasajero',
  templateUrl: './chat-pasajero.page.html',
  styleUrls: ['./chat-pasajero.page.scss'],
})
export class ChatPasajeroPage{

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
            this.router.navigateByUrl("lista-pasajeros");/*  */
          }
        }
      ]

    });

    await alert.present();
  }

}
