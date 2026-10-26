import { Routes } from '@angular/router';
import { IndentListComponent } from './indent-list/indent-list.component';

export const routes: Routes = [
  { path: 'indent-list', component: IndentListComponent },
  { path: '', redirectTo: 'indent-list', pathMatch: 'full' },
];
