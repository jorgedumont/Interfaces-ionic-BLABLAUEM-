import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListareservasPage } from './listareservas.page';

const routes: Routes = [
  {
    path: '',
    component: ListareservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListareservasPageRoutingModule {}
