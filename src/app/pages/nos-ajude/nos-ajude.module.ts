import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosAjudePageRoutingModule } from './nos-ajude-routing.module';

import { NosAjudePage } from './nos-ajude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosAjudePageRoutingModule
  ],
  declarations: [NosAjudePage]
})
export class NosAjudePageModule {}
