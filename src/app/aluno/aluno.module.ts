import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { InserirAlunoComponent } from './inserir-aluno/inserir-aluno.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';



@NgModule({
  declarations: [
    ListarAlunoComponent,
    InserirAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AlunoModule { }
