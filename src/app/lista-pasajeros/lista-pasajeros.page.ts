import { Component} from '@angular/core';

@Component({
  selector: 'app-lista-pasajeros',
  templateUrl: './lista-pasajeros.page.html',
  styleUrls: ['./lista-pasajeros.page.scss'],
})
export class ListaPasajerosPage {

  constructor() { }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
