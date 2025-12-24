import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../carrinho/carrinhoService';
import { BarraDePesquisa } from '../barra-de-pesquisa/barra-de-pesquisa';

@Component({
  selector: 'app-header',
  imports: [RouterLink, BarraDePesquisa],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(public carrinhoService: CarrinhoService) {}

}
