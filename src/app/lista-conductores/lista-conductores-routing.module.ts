import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaConductoresPage } from './lista-conductores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaConductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaConductoresPageRoutingModule {}
