import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from 'src/app/app-constants';
import { HomeLayoutComponent } from 'src/app/shared/components/home-layout/home-layout.component';
import { LoginLayoutComponent } from 'src/app/shared/components/login-layout/login-layout.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${RoutePath.HOMEPAGE}`,
    pathMatch: 'full'
  },
  {
    path: RoutePath.HOMEPAGE,
    component: HomeLayoutComponent
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {path: 'login',
      component: LoginFormComponent
    },
    {path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
