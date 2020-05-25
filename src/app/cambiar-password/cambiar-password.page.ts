import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage{

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
