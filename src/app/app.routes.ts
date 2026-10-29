import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'indent-list',
    loadComponent: () =>
      import('./indent-list/indent-list.component').then(m => m.IndentListComponent),
  },
  {
    path: 'learn',
    loadComponent: () =>
      import('./parent-a/parent-a.component').then(m => m.ParentAComponent),
  },
  { path: '', redirectTo: 'indent-list', pathMatch: 'full' },
];
