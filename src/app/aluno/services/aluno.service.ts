
import { Injectable } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';

const LS_CHAVE = "alunos";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  listarTodos() : Array<Aluno>{
    const alunos = localStorage[LS_CHAVE];
    return alunos ? JSON.parse(alunos) : []
  }

  inserir(aluno : Aluno): void{
    const alunos = this.listarTodos();
    aluno.id = new Date().getTime();
    alunos.push(aluno);
    localStorage[LS_CHAVE] = JSON.stringify(alunos)
  }

  buscarPorId(id: number) : Aluno | undefined{
    const alunos = this.listarTodos();
    return alunos.find(alunos => alunos.id === id);
  }
  
  atualizar(aluno: Aluno): void{
    const alunos = this.listarTodos();
    alunos.forEach((obj, index, objs)=>{
      if(aluno.id === obj.id){
        objs[index]=aluno
      }
    });
    
    localStorage[LS_CHAVE] = JSON.stringify(alunos)
  }

  remover(id:number) : void {
    let alunos = this.listarTodos();
    alunos = alunos.filter(aluno => aluno.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }
}