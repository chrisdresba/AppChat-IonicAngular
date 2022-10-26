import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaBPage } from './sala-b.page';

const routes: Routes = [
  {
    path: '',
    component: SalaBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaBPageRoutingModule {}
