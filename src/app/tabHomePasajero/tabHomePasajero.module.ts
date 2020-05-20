import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tabHomePasajero.page';

import { Tab2PageRoutingModule } from './tabHomePasajero-routing.module';
import { Geolocation } from "@ionic-native/geolocation/ngx";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  providers: [
    Geolocation
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
