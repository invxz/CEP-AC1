import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisaEnderecoPageRoutingModule } from './pesquisa-endereco-routing.module';

import { PesquisaEnderecoPage } from './pesquisa-endereco.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisaEnderecoPageRoutingModule,
    HttpClientModule,

  ],
  declarations: [PesquisaEnderecoPage]
})
export class PesquisaEnderecoPageModule {}

