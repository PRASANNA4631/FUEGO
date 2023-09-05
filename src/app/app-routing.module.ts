import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from './app-constants';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/secure/secure.module').then((m) => m.SecureModule)
  },
  {
    path:RoutePath.ERROR,
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: RoutePath.ERROR
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
