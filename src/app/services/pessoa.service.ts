import { Injectable } from '@angular/core';
import { Pessoa } from '../classes/pessoa';

@Injectable()
export class PessoaService {

  constructor() { }

  listarPessoas() : Pessoa[] {
    return [
      { nome: 'Peterson', idade: 32 },
      { nome: 'Maria Cristina', idade: 25 },
      { nome: 'Daniela', idade: 33 },
      { nome: 'Maria', idade: 40 },
      { nome: 'Osvaldo', idade: 45 }
    ];
  }
}
