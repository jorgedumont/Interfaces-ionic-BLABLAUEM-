import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionConductorPage } from './opcion-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionConductorPageRoutingModule {}
