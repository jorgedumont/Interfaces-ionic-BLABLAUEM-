import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioConductorPage } from './usuario-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioConductorPageRoutingModule {}
