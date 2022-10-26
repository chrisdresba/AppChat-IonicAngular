import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaAPage } from './sala-a.page';

const routes: Routes = [
  {
    path: '',
    component: SalaAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaAPageRoutingModule {}
