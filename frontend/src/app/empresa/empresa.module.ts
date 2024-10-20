import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { ListEmpresaComponent } from './list-empresa/list-empresa.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FormEmpresaComponent,
    ListEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule, // Importar FormsModule aqui
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ]
})

export class EmpresaModule { }
