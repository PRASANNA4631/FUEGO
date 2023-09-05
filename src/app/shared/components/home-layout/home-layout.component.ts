import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/app-constants';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: [
  ]
})
export class HomeLayoutComponent {

  unconditionalSearchForm!: FormGroup;

  constructor(private _router: Router,
    private _fb: FormBuilder){}

  formInitiation() {
    this.unconditionalSearchForm = this._fb.group({
      category: new FormControl(),
      Brand: new FormControl(),
      budjet: new FormControl(),
    })
  }

  navToLogin(){
    this._router.navigate([RoutePath.LOGIN]);
  }

  navToRegister(){}

  unconditionalSearch() {
   // Category, Budjet, Brand
  }

}
