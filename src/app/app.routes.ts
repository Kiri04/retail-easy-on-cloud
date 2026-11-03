import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login-page',
    loadComponent: () =>
      import('./login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path:'register-user',
    loadComponent : () => import('./register-user/register-user.component').then(m => m.RegisterUserComponent)
  }
];
