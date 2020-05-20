import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionconductorPageRoutingModule } from './configuracionconductor-routing.module';

import { ConfiguracionconductorPage } from './configuracionconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionconductorPageRoutingModule
  ],
  declarations: [ConfiguracionconductorPage]
})
export class ConfiguracionconductorPageModule {}
