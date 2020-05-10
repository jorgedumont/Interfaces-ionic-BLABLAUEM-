import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMovimientosPageRoutingModule } from './lista-movimientos-routing.module';

import { ListaMovimientosPage } from './lista-movimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMovimientosPageRoutingModule
  ],
  declarations: [ListaMovimientosPage]
})
export class ListaMovimientosPageModule {}
