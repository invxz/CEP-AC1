import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaEnderecoPage } from './pesquisa-endereco.page';

describe('PesquisaEnderecoPage', () => {
  let component: PesquisaEnderecoPage;
  let fixture: ComponentFixture<PesquisaEnderecoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PesquisaEnderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
