import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-de-pesquisa',
  imports: [FormsModule],
  templateUrl: './barra-de-pesquisa.html',
  styleUrl: './barra-de-pesquisa.css',
})
export class BarraDePesquisa {
  descricao = '';

  constructor(private route: Router) {}
  
  pesquisar(){
    if(this.descricao){
      this.route.navigate(['/produtos'], { queryParams: { descricao: this.descricao } });
    } else {
      this.route.navigate(['/produtos']);
    }
  }

}
