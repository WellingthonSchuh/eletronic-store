import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinhoService';
import { IProdutoCarrinho } from '../produtos/produtos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  imports: [FormsModule, CommonModule, CurrencyPipe],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  items: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  removerProdutoCarrinho(produtoID: number) {
    this.items = this.items.filter(item => item.id !== produtoID);
    this.carrinhoService.removerProdutoCarrinho(produtoID);
    this.calcularTotal();
  }

  calcularTotal(): number {
    this.total = this.items.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    return this.total;
  }

  comprar(): void {
    alert('Compra finalizada com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.items = [];
    this.total = 0;
    this.router.navigate(['/produtos']);
  }
}