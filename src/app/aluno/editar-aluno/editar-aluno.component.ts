import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../shared/models/aluno.model';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent implements OnInit{

  @ViewChild('formAluno') formAluno! : NgForm;
  aluno : Aluno = new Aluno();

  ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      const res = this.alunoService.buscarPorId(id);
      if(res !== undefined){
        this.aluno = res;
      }else{
        throw new Error("aluno não encontrada: id = " + id)
      }
  }

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  atualizar(): void{
    if(this.formAluno.form.valid){
      this.alunoService.atualizar(this.aluno);
      this.router.navigate(['/aluno'])
    }
  }
}
