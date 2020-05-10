import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevocochePage } from './nuevocoche.page';

const routes: Routes = [
  {
    path: '',
    component: NuevocochePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevocochePageRoutingModule {}
