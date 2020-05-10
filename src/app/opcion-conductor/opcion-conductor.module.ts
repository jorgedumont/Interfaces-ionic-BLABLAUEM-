import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionConductorPageRoutingModule } from './opcion-conductor-routing.module';

import { OpcionConductorPage } from './opcion-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionConductorPageRoutingModule
  ],
  declarations: [OpcionConductorPage]
})
export class OpcionConductorPageModule {}
