import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPasajero1Page } from './chat-pasajero1.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPasajero1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPasajero1PageRoutingModule {}
