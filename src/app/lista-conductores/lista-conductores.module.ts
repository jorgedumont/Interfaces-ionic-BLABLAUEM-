import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaConductoresPageRoutingModule } from './lista-conductores-routing.module';

import { ListaConductoresPage } from './lista-conductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaConductoresPageRoutingModule
  ],
  declarations: [ListaConductoresPage]
})
export class ListaConductoresPageModule {}
