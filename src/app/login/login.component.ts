import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  loginUserData: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  LoginUser() {
    var userDataObject={
      EmailId:this.loginUserData.EmailId,
      password:this.loginUserData.password
    }
    this._auth.loginUser(userDataObject).subscribe(res => {
      localStorage.setItem('token', res.token);
      if (res.isAdmin)
        this._router.navigate(['/dashboard']);



      else
        this._router.navigate(['/product']);
    }, err => console.error("Error:",err));

  }

  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.loginUserData.formLoginGroup.controls[controlname].hasError(typeofvalidator);
  }

}
