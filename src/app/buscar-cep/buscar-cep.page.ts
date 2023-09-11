import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.page.html',
  styleUrls: ['./buscar-cep.page.scss'],
})
export class BuscarCepPage {

  cep: string = '';
  endereco: any = null;

  constructor(private http: HttpClient) {}

  buscarCep() {
    if (this.cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .subscribe((data: any) => {
          this.endereco = data;
        });
    }
  }
}
