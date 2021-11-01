import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../interface/account';
import { url } from '../shared/const/temp-url.const';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {
  constructor(private _http: HttpClient) { }
  postAuth(authForm:FormGroup):any{
    return this._http.post<IAccount[]>(`${url}users/check`, authForm).subscribe(r=>console.log(r))
  }
  postRegister(registerForm:FormGroup):any{
    return this._http.post<IAccount[]>(`${url}users/register`, registerForm).subscribe(r=>console.log(r))
  }
  
  

  public checkLogin(body:any):Observable<IAccount[]>{
    return this._http.post<IAccount[]>(`${url}users/check`, body)
  }
}
