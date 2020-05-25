import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPasajero1PageRoutingModule } from './chat-pasajero1-routing.module';

import { ChatPasajero1Page } from './chat-pasajero1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPasajero1PageRoutingModule
  ],
  declarations: [ChatPasajero1Page]
})
export class ChatPasajero1PageModule {}
