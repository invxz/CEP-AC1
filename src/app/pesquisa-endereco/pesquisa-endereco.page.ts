import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pesquisa-endereco',
  templateUrl: './pesquisa-endereco.page.html',
  styleUrls: ['./pesquisa-endereco.page.scss'],
})
export class PesquisaEnderecoPage {

  estado: string = '';
  cidade: string = '';
  rua: string = '';
  endereco: any = null;

  constructor(private http: HttpClient) {}

  buscarEndereco() {
    if (this.estado && this.cidade && this.rua) {
      this.http.get(`https://viacep.com.br/ws/${this.cidade}/${this.rua}/json/`)
        .subscribe((data: any) => {
          this.endereco = data;
        });
    }
  }
}
