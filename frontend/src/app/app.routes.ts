import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'empresa', loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule)
    },

    {
        path: 'setor', loadChildren: () => import('./setor/setor.module').then(m => m.SetorModule)
    }
];
