import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresardineroPageRoutingModule } from './ingresardinero-routing.module';

import { IngresardineroPage } from './ingresardinero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresardineroPageRoutingModule
  ],
  declarations: [IngresardineroPage]
})
export class IngresardineroPageModule {}
