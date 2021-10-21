import { Account } from './../interface/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private _url:string = 'http://localhost:3003'


  constructor(private _db: HttpClient) { }
  public checkLogin(body:any):Observable<Account[]>{

    return this._db.post<Account[]>(`${this._db}/accounts/check`, body)
}



}