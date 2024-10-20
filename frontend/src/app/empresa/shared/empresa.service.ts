import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from './empresa.model';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  getEmpresaById(empresaId: number) {
    throw new Error('Method not implemented.');
  }

  apiUrl: string = environment.backendUrl + '/empresa';
  
  constructor(private http: HttpClient) { }

  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl, empresa);
  }

  getAll(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.apiUrl);
  }

  getById(id: number): Observable<Empresa>{
    return this.http.get<Empresa>(this.apiUrl + '/' + id);
  }

  update(id: number, empresa: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>(this.apiUrl + '/' + id, empresa);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + id)
  }

  filter(filter: Object): Observable<Empresa[]> {
    return this.http.post<any>(this.apiUrl + '/filter', filter);
  }
}
