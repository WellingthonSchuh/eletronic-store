import { Routes } from '@angular/router';
import { Produtos } from './produtos/produtos';
import { NaoEncontrada } from './nao-encontrada/nao-encontrada';
import { DetalhesProduto } from './produtos/detalhes-produto/detalhes-produto';
import { Carrinho } from './carrinho/carrinho';
import { Contato } from './contato/contato';

export const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produtos', component: Produtos },
  { path: 'produtos/:id', component: DetalhesProduto },
  { path: 'carrinho', component: Carrinho },
  { path: 'contato', component: Contato },
  { path: '**', component: NaoEncontrada}
];
