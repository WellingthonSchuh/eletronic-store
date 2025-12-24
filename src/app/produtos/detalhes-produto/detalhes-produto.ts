import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../produtosService';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { NotificacaoService } from '../../carrinho/notificacaoService';
import { CarrinhoService } from '../../carrinho/carrinhoService';

@Component({
  selector: 'app-detalhes-produto',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './detalhes-produto.html',
  styleUrl: './detalhes-produto.css',
})
export class DetalhesProduto {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { 
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtosService.getById(id);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");
    const produto: IProdutoCarrinho = {...this.produto!, quantidade: this.quantidade};
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
