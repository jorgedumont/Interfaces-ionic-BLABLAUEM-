import { Component } from '@angular/core';
import { Map, tileLayer, marker, circle, icon} from "leaflet";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tabHomeConductor.page.html',
  styleUrls: ['tabHomeConductor.page.scss']
})
export class Tab2Page {
  map: Map;
  marker: any;
  icon: any;
  circle: any;
  greenIcon = icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  constructor(public alertController: AlertController,private router: Router) {}

  ionViewDidEnter(){
    this.showMap();
  }

  showMap() {
    this.map = new Map("myMap").setView([40.410915, -3.708794], 55);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    this.marker = marker([40.410915, -3.708794], 25).addTo(this.map).bindPopup("I am here.");;
    this.circle = circle([40.410915, -3.708794], {
      color: 'blue',
      fillOpacity: 0.2,
      radius: 75
  }).addTo(this.map);

  this.marker = marker([40.410415, -3.708794], {icon: this.greenIcon}).addTo(this.map);
  this.marker = marker([40.410915, -3.708294], {icon: this.greenIcon}).addTo(this.map);
  this.marker = marker([40.410215, -3.708794], {icon: this.greenIcon}).addTo(this.map);

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'En la siguiente pantalla puedes deslizar lateralmente para acceder a Mensajes/Reservas',
      buttons: [
        {
          text: 'De acuerdo',
          handler: () => {
            console.log();
            this.router.navigateByUrl("/lista-pasajeros");
          }
        }
      ]

    });

    await alert.present();
  }


}
