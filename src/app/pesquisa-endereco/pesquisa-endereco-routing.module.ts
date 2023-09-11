import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaEnderecoPage } from './pesquisa-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisaEnderecoPageRoutingModule {}
