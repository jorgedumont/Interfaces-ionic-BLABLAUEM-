import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})
export class LoginConductorPage {
  
  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sesion Iniciada',
      message: 'Bienvenido a BlablaUem',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("mapa");
          }
        }
      ]

    });

    await alert.present();
  }
}
