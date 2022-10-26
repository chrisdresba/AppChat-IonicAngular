import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaBPageRoutingModule } from './sala-b-routing.module';

import { SalaBPage } from './sala-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaBPageRoutingModule
  ],
  declarations: [SalaBPage]
})
export class SalaBPageModule {}
