import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

const Components = [
  ContentLayoutComponent,
  LoginLayoutComponent,
  HomeLayoutComponent,
  HeaderComponent,
  FooterComponent,
  SideNavComponent
]

const AngularModules = [
  ReactiveFormsModule,
  FormsModule,
  RouterModule
]

//const ThirdPartyModules = []
@NgModule({
  declarations: [
    Components,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AngularModules,
  ],
  exports: [
 Components
  ]
})
export class SharedModule { }
