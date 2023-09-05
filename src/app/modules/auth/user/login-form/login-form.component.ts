import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent {

  constructor(private _router: Router){}

  forgotPassword(){
    this._router.navigateByUrl('forgotpassword')
  }
}
