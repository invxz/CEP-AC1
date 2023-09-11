import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pesquisa-cep',
  templateUrl: './pesquisa-cep.page.html',
  styleUrls: ['./pesquisa-cep.page.scss'],
})
export class PesquisaCepPage {

  estado: string = '';
  cidade: string = '';
  rua: string = '';
  cep: string = '';

  constructor(private http: HttpClient) {}

  buscarCep() {
    if (this.estado && this.cidade && this.rua) {
      this.http.get(`https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.rua}/json/`)
        .subscribe((data: any) => {
          if (data.cep) {
            this.cep = data.cep;
          } else {
            this.cep = 'O CEP não encontrado';
          }
        });
    }
  }
}
