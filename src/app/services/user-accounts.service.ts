import { SessionStorageService } from './session-storage.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../interface/account';
import { url } from '../shared/const/temp-url.const';
import * as cryptojs from 'crypto-js';
import { IRegister } from '../interface/register';


@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {
  public userAuthentified:boolean = false

  constructor(private _http: HttpClient, private _sessionStorage:SessionStorageService) { }
  
  postAuth(authForm:IAccount):Observable<IAccount>{
    const encAuthForm = {...authForm,Password:cryptojs.SHA256(authForm.Password).toString(cryptojs.enc.Base64)}
    console.log(encAuthForm);

    return this._http.post<IAccount>(`${url}users/check`, encAuthForm)
    // (r:IAccount)=> this._sessionStorage.setSessionStorage('userID', r.UserID)
    
  }

  postRegister(registerForm:IRegister):any{
    const encAuthForm = {...registerForm,Password:cryptojs.SHA256(registerForm.Password).toString(cryptojs.enc.Base64)}
    console.log(encAuthForm);
    
    return this._http.post<IAccount[]>(`${url}users/register`, encAuthForm).subscribe(r=>console.log(r))
  }
  
  public checkLogin(body:any):Observable<IAccount[]>{
    return this._http.post<IAccount[]>(`${url}users/check`, body)
  }
}
