import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaAPageRoutingModule } from './sala-a-routing.module';

import { SalaAPage } from './sala-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaAPageRoutingModule
  ],
  declarations: [SalaAPage]
})
export class SalaAPageModule {}
