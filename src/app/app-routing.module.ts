import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'buscar-cep',
    loadChildren: () => import('./buscar-cep/buscar-cep.module').then( m => m.BuscarCepPageModule)
  },
  {
    path: 'pesquisa-endereco',
    loadChildren: () => import('./pesquisa-endereco/pesquisa-endereco.module').then( m => m.PesquisaEnderecoPageModule)
  },
  {
    path: 'pesquisa-cep',
    loadChildren: () => import('./pesquisa-cep/pesquisa-cep.module').then( m => m.PesquisaCepPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
