import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IProdutoCarrinho } from '../produtos/produtos';

@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {
  items: IProdutoCarrinho[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    obtemCarrinho() {
      if (isPlatformBrowser(this.platformId)) {
        this.items = JSON.parse(localStorage.getItem('carrinho') || "[]");
      }
      return this.items;
      
    }

    adicionarAoCarrinho(produto: IProdutoCarrinho) {
      this.items.push(produto);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('carrinho', JSON.stringify(this.items));
      }
      
    }

    limparCarrinho() {
      this.items = [];
      if (isPlatformBrowser(this.platformId)) {
        localStorage.clear();
      }  
    }

    removerProdutoCarrinho(produtoID: number) {
      this.items = this.items.filter(item => item.id !== produtoID);
      localStorage.setItem('carrinho', JSON.stringify(this.items));
  }
}