import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaCepPage } from './pesquisa-cep.page';

describe('PesquisaCepPage', () => {
  let component: PesquisaCepPage;
  let fixture: ComponentFixture<PesquisaCepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PesquisaCepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
