import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { ListEmpresaComponent } from './list-empresa/list-empresa.component';

@NgModule({
  declarations: [
    FormEmpresaComponent,
    ListEmpresaComponent
  ],
  imports: [
    CommonModule, 
    EmpresaRoutingModule
  ]
})

export class EmpresaModule { }
