import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoteComAmorPageRoutingModule } from './adote-com-amor-routing.module';

import { AdoteComAmorPage } from './adote-com-amor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoteComAmorPageRoutingModule
  ],
  declarations: [AdoteComAmorPage]
})
export class AdoteComAmorPageModule {}
