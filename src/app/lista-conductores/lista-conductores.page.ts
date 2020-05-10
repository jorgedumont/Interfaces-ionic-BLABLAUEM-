import { Component} from '@angular/core';


@Component({
  selector: 'app-lista-conductores',
  templateUrl: './lista-conductores.page.html',
  styleUrls: ['./lista-conductores.page.scss'],
})
export class ListaConductoresPage {

  constructor() { }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  

}
