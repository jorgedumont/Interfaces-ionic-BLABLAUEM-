import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cambiar-password-conductor',
  templateUrl: './cambiar-password-conductor.page.html',
  styleUrls: ['./cambiar-password-conductor.page.scss'],
})
export class CambiarPasswordConductorPage {

  constructor(public alertController: AlertController,private router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Contraseña cambiada con exito',
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
