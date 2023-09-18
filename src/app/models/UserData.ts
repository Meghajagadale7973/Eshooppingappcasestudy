import {NgForm,FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';

export class UserData{
  FullName:string='';
  Gender:string='';
  PhoneNumber:number=0;
  Address:string='';
  EmailId:string='';
  password:string='';
  formLoginGroup:FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formLoginGroup=_builder.group({});
        this.formLoginGroup.addControl("UserNameControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("PasswordControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("FullNameControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("GenderControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("PhoneNumberControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("AddressControl",new FormControl('',Validators.required));
    }
}
