import { Link } from './../../shared/models/link.model';
import { Component, OnInit } from '@angular/core';

import { UserAccountsService } from './../../services/user-accounts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { home } from 'src/app/shared/const/home.const';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public cancel = '/auth'
  public valid = '/heroe'
  constructor(private _fb:FormBuilder,private _userService:UserAccountsService) { }
  registerForm: FormGroup = new FormGroup({});
  
  ngOnInit(): void {
    this.registerForm=this._fb.group({
      Login:'',
      Password:'',
      LastName: '',
      FirstName: '',
      Mail: ''
    })

  }
  
  submitAuth(){
    this._userService.postRegister(this.registerForm.value)
  }

}
