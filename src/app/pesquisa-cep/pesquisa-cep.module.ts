import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisaCepPageRoutingModule } from './pesquisa-cep-routing.module';

import { PesquisaCepPage } from './pesquisa-cep.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisaCepPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [PesquisaCepPage]
})
export class PesquisaCepPageModule {}
