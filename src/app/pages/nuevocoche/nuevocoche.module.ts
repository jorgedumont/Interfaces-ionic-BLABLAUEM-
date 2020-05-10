import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevocochePageRoutingModule } from './nuevocoche-routing.module';

import { NuevocochePage } from './nuevocoche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevocochePageRoutingModule
  ],
  declarations: [NuevocochePage]
})
export class NuevocochePageModule {}
