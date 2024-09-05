import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirCursoComponent } from './inserir-curso/inserir-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';



@NgModule({
  declarations: [
    ListarCursoComponent,
    InserirCursoComponent,
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CursoModule { }
