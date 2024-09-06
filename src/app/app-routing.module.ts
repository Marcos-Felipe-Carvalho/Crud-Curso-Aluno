import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursoComponent } from './curso/listar-curso/listar-curso.component';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { InserirCursoComponent } from './curso/inserir-curso/inserir-curso.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';
import { InserirAlunoComponent } from './aluno/inserir-aluno/inserir-aluno.component';
import { EditarAlunoComponent } from './aluno/editar-aluno/editar-aluno.component';

const routes: Routes = [
  {path: '', redirectTo:'curso/listar',pathMatch:'full'},
  {path: 'curso', redirectTo:'curso/listar'},
  {path: 'curso/listar', component: ListarCursoComponent},
  {path: 'curso/novo', component: InserirCursoComponent},
  {path: 'curso/editar/:id', component: EditarCursoComponent},
  {path: 'aluno', redirectTo:'aluno/listar'},
  {path: 'aluno/listar', component:ListarAlunoComponent},
  {path: 'aluno/novo', component:InserirAlunoComponent},
  {path: 'aluno/editar/:id', component:EditarAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
