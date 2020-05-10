import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargarautomaticoPage } from './recargarautomatico.page';

const routes: Routes = [
  {
    path: '',
    component: RecargarautomaticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargarautomaticoPageRoutingModule {}
