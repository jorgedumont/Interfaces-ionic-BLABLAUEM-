import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListareservasPageRoutingModule } from './listareservas-routing.module';

import { ListareservasPage } from './listareservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListareservasPageRoutingModule
  ],
  declarations: [ListareservasPage]
})
export class ListareservasPageModule {}
