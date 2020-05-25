import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservapasajeroPage } from './reservapasajero.page';

const routes: Routes = [
  {
    path: '',
    component: ReservapasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservapasajeroPageRoutingModule {}
