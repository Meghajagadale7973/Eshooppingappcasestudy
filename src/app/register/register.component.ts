import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: UserData = new UserData();
  modelText:string="";
  modelHeader:string="";
  showSpinner:boolean=false;
  constructor(private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  DisplayModalPopup(modelHeader:string,modelText:string){
    this.modelHeader=modelHeader;
    this.modelText=modelText;
    document.getElementById("btnLaunchModel")?.click();
  }
  ShowSpinner(){
    this.showSpinner=true;
  }
  HideSpinner(){
    this.showSpinner=false;
  }
  registerUser() {

    if(this.registerUserData.EmailId==''|| this.registerUserData.password==''){
      this.DisplayModalPopup("Error","Please enter the username and password");
      return;
    }
    this.ShowSpinner();
    var userDataObject={
      emailid:this.registerUserData.EmailId,
      password:this.registerUserData.password,
      fullname:this.registerUserData.FullName,
      gender:this.registerUserData.Gender,
      phonenumber:this.registerUserData.PhoneNumber,
      address:this.registerUserData.Address,

    }
    this._auth.registerUser(userDataObject).subscribe(res => {
     this.HideSpinner();localStorage.setItem('token',res.token);
      this._router.navigate(['/login'])
    },
      err => console.log(err));
  }

}
