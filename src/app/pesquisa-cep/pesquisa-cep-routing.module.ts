import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaCepPage } from './pesquisa-cep.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaCepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisaCepPageRoutingModule {}
