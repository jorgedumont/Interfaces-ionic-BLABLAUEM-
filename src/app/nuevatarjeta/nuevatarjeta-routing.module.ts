import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevatarjetaPage } from './nuevatarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevatarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevatarjetaPageRoutingModule {}
