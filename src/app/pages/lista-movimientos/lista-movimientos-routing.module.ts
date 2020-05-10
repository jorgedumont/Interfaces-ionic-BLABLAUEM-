import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMovimientosPage } from './lista-movimientos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMovimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMovimientosPageRoutingModule {}
