import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarPasswordConductorPageRoutingModule } from './cambiar-password-conductor-routing.module';

import { CambiarPasswordConductorPage } from './cambiar-password-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarPasswordConductorPageRoutingModule
  ],
  declarations: [CambiarPasswordConductorPage]
})
export class CambiarPasswordConductorPageModule {}
