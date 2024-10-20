import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from '../shared/empresa.service';



@Component({
  selector: 'app-form-empresa',
  standalone: false,
  templateUrl: './form-empresa.component.html',
  styleUrl: './form-empresa.component.css'
})
export class FormEmpresaComponent implements OnInit {

  currentAction?: string;
  formulario: FormGroup;
  empresaId: number = -1;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private empresaService: EmpresaService){
    this.formulario = this.formBuilder.group({
      razao_social: ['', Validators.required],
      nome_fantasia: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)]],
      setores: [[], [Validators.required]]
    });
  }
  
  ngOnInit(){
    this.setCurrentAction();
    if (this.currentAction === 'edit') {
      this.loadEmpresa(); // Carregar os dados da empresa para edição
    }
  }

  setCurrentAction(){
    if (this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else{
      this.currentAction = "edit"
      this.loadEmpresa()
    }
  }

  loadEmpresa() {
    this.empresaId = this.route.snapshot.params['id'];
    this.empresaService.getById(this.empresaId).subscribe(
      (empresa) => {
        this.formulario.patchValue(empresa); // Preencher o formulário com os dados da empresa
      },
      (error) => {
        alert("Erro ao carregar empresa.");
      }
    );
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      if (this.currentAction === 'new') {
        this.createEmpresa();
      } else {
        this.updateEmpresa();
      }
    }
  }

  createEmpresa() {
    this.formulario.patchValue({setores: [parseInt(this.formulario.value.setores)]})
    console.log(this.formulario.value);
    this.empresaService.create(this.formulario.value).subscribe(
      () => {
        alert('Empresa criada com sucesso!');
      },
      (error) => {
        alert('Erro ao criar empresa.');
      }
    );
  }

  updateEmpresa() {
    if (this.empresaId) {
      this.empresaService.update(this.empresaId, this.formulario.value).subscribe(
        () => {
          alert('Empresa atualizada com sucesso!');
        },
        (error) => {
          console.log(error);
          alert('Erro ao atualizar empresa.');
        }
      );
    }
  }
}
