import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSetorComponent } from './form-setor/form-setor.component';
import { ListSetorComponent } from './list-setor/list-setor.component';
import { SetorRoutingModule } from './setor-routing.module';



@NgModule({
  declarations: [
    FormSetorComponent,
    ListSetorComponent
  ],
  imports: [
    CommonModule,
    SetorRoutingModule
  ]
})
export class SetorModule { }
