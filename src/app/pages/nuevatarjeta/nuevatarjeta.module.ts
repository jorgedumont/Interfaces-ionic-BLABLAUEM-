import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevatarjetaPageRoutingModule } from './nuevatarjeta-routing.module';

import { NuevatarjetaPage } from './nuevatarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevatarjetaPageRoutingModule
  ],
  declarations: [NuevatarjetaPage]
})
export class NuevatarjetaPageModule {}
