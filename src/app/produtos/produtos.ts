import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutosService } from './produtosService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe, RouterLink, FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) {
    this.produtos = this.produtosService.getAll();
  }

  ngOnInit() {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get('descricao')?.toLowerCase();
      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      
      this.produtos = produtos;
    });
  }
}

export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    produtosEstoque: number;
    desconto?: number;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", produtosEstoque: 15 },
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no PIX", desconto: 2000.00, imagem: "./assets/monitor-1.jpg", produtosEstoque: 15  },
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", produtosEstoque: 15  },
    { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", produtosEstoque: 15  },
    { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", produtosEstoque: 15  },
    { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", produtosEstoque: 15  },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", produtosEstoque: 15  },
    { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", produtosEstoque: 15  },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", produtosEstoque: 15  },
    { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", produtosEstoque: 15  },
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", produtosEstoque: 15  },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", produtosEstoque: 15  },
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", produtosEstoque: 15  },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", produtosEstoque: 15  },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", produtosEstoque: 15  },
]