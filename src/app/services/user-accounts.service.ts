import { SessionStorageService } from './session-storage.service';
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
  public userAuthentified:boolean = false

  constructor(private _http: HttpClient, private _sessionStorage:SessionStorageService) { }
  postAuth(authForm:FormGroup):Observable<IAccount>{
    return this._http.post<IAccount>(`${url}users/check`, authForm)
    // (r:IAccount)=> this._sessionStorage.setSessionStorage('userID', r.UserID)
    
  }

  postRegister(registerForm:FormGroup):any{
    return this._http.post<IAccount[]>(`${url}users/register`, registerForm).subscribe(r=>console.log(r))
  }
  
  public checkLogin(body:any):Observable<IAccount[]>{
    return this._http.post<IAccount[]>(`${url}users/check`, body)
  }
}
