import { Component } from '@angular/core';
import { Map, tileLayer, marker, circle, icon} from "leaflet";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tabHomePasajero.page.html',
  styleUrls: ['tabHomePasajero.page.scss']
})
export class Tab2Page {
  map: Map;
  marker: any;
  icon: any;
  circle: any;
  yellowIcon = icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  constructor() {}

  ionViewDidEnter(){
    this.showMap();
  }

  showMap() {
    this.map = new Map("myMap").setView([40.434578, -3.698599], 55);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    this.marker = marker([40.434578, -3.698599], 25).addTo(this.map).bindPopup("I am here.");;
    this.circle = circle([40.434578, -3.698599], {
      color: 'blue',
      fillOpacity: 0.2,
      radius: 75
  }).addTo(this.map);

  this.marker = marker([40.434958, -3.698749], {icon: this.yellowIcon}).addTo(this.map);
  this.marker = marker([40.434275, -3.698391], {icon: this.yellowIcon}).addTo(this.map);
  this.marker = marker([40.434617, -3.698510], {icon: this.yellowIcon}).addTo(this.map);
  this.marker = marker([40.434117, -3.698562], {icon: this.yellowIcon}).addTo(this.map);

  }

}
