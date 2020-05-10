import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPasajeroPage } from './chat-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPasajeroPageRoutingModule {}
