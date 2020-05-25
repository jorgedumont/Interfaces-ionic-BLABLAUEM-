import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservapasajeroPageRoutingModule } from './reservapasajero-routing.module';

import { ReservapasajeroPage } from './reservapasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservapasajeroPageRoutingModule
  ],
  declarations: [ReservapasajeroPage]
})
export class ReservapasajeroPageModule {}
