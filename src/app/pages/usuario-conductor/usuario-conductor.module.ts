import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioConductorPageRoutingModule } from './usuario-conductor-routing.module';

import { UsuarioConductorPage } from './usuario-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioConductorPageRoutingModule
  ],
  declarations: [UsuarioConductorPage]
})
export class UsuarioConductorPageModule {}
