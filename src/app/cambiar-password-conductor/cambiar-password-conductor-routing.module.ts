import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarPasswordConductorPage } from './cambiar-password-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarPasswordConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarPasswordConductorPageRoutingModule {}
