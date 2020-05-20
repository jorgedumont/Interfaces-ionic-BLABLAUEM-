import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionconductorPage } from './configuracionconductor.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionconductorPageRoutingModule {}
