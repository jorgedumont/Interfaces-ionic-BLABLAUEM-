import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargarautomaticoPageRoutingModule } from './recargarautomatico-routing.module';

import { RecargarautomaticoPage } from './recargarautomatico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargarautomaticoPageRoutingModule
  ],
  declarations: [RecargarautomaticoPage]
})
export class RecargarautomaticoPageModule {}
