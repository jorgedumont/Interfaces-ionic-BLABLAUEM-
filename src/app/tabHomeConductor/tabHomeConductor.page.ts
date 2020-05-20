import { Component } from '@angular/core';
import { Map, tileLayer, marker, polyline } from "leaflet";
import { Geolocation } from "@ionic-native/geolocation/ngx";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tabHomeConductor.page.html',
  styleUrls: ['tabHomeConductor.page.scss']
})
export class Tab2Page {
  map: Map;
  marker: any;
  latLong = [];

  constructor(private geolocation: Geolocation) {}

  ionViewDidEnter(){
    this.showMap();
  }

  showMap() {

    this.map = new Map("myMap").setView([40.410915, -3.708794], 55);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

  }

  getPositions(){
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ]
    }).then((latlng) => {
      if (this.marker) {
        this.marker.remove();
        this.showMarker(latlng);
      } else {
        this.showMarker(latlng);
      };
    });
  }

  showMarker(latLong){
    this.marker = marker(latLong, 25);
    this.marker.addTo(this.map)
    .bindPopup('Hey, I\'m Here');
    this.map.setView(latLong);
  }
}
