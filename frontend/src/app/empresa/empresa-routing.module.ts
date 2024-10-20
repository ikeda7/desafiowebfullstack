import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { ListEmpresaComponent } from './list-empresa/list-empresa.component';

const routes: Routes = [
  {
    path: '', component: ListEmpresaComponent
  },

  {
    path: 'new', component: FormEmpresaComponent
  },

  {
    path: ':id/edit', component: FormEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmpresaRoutingModule { }