import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSetorComponent } from './form-setor/form-setor.component';
import { ListSetorComponent } from './list-setor/list-setor.component';

const routes: Routes = [
  {
    path: '', component: ListSetorComponent
  },

  {
    path: 'new', component: FormSetorComponent
  },

  {
    path: ':id/edit', component: FormSetorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SetorRoutingModule { }