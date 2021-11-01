import { home } from 'src/app/shared/const/home.const';
import { Link } from './../../shared/models/link.model';
import { Component, OnInit } from '@angular/core';

import { UserAccountsService } from './../../services/user-accounts.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public registerPath = 'register';
  public cancel = home

  constructor(private _fb:FormBuilder,private _userService:UserAccountsService) { }
  authForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.authForm=this._fb.group({
      Login:'',
      Password:'',
    })

    console.log(this.authForm);

  }
  submitAuth(){
    this._userService.postAuth(this.authForm.value)
    console.log(this.authForm);
    
  }
}
