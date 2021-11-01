import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroe } from '../interface/heroe';
import { url } from '../shared/const/temp-url.const';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private _http: HttpClient) { }

  public getHeroe(id:number): Observable <IHeroe[]>{
    return this._http.get<IHeroe[]>(`${url}heroes/${id}`)
  }
}
