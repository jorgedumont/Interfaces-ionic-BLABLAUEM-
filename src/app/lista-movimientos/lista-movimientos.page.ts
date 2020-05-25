import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.page.html',
  styleUrls: ['./lista-movimientos.page.scss'],
})
export class ListaMovimientosPage {

  constructor(public alertController: AlertController,private router: Router) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Estas seguro que quieres cancelar el viaje? Si faltan menos de 48h se te cobrara el viaje.',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
          }
        }, {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]

    });

    await alert.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
