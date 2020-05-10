import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPasajeroPageRoutingModule } from './chat-pasajero-routing.module';

import { ChatPasajeroPage } from './chat-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPasajeroPageRoutingModule
  ],
  declarations: [ChatPasajeroPage]
})
export class ChatPasajeroPageModule {}
