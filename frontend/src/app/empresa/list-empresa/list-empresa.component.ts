import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../shared/empresa.model';
import { EmpresaService } from '../shared/empresa.service';
import { Router } from '@angular/router'; // Importar Router aqui

@Component({
  selector: 'app-list-empresa',
  standalone: false,
  templateUrl: './list-empresa.component.html',
  styleUrl: './list-empresa.component.css'
})
export class ListEmpresaComponent implements OnInit {
  empresas: Empresa[] = [];
  filteredEmpresas: Empresa[] = [];
  filtro: string = '';

  constructor(private empresaService: EmpresaService, private router: Router) {}

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.empresaService.getAll().subscribe(data => {
      this.empresas = data;
      this.filteredEmpresas = data; // Inicializa a lista filtrada
    }, error => {
      console.log(error);
    });
  }

  applyFilter(): void {
    const filter = {filter: this.filtro}
    this.empresaService.filter(filter).subscribe(data => {
      console.log(data);
      this.empresas = data;
      this.filteredEmpresas = data; // Inicializa a lista filtrada
    });
  }
}
