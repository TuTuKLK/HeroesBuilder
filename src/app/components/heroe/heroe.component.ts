import { SessionStorageService } from './../../services/session-storage.service';
import { IHeroe } from './../../interface/heroe';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  public heroes!: Observable<IHeroe[]>

  public storage = 'storage';
  public newHeroe = '/heroe/new';
  constructor(private _heroserv:HeroesService,private _fb:FormBuilder, private _sessionStorage:SessionStorageService) {

  }


  ngOnInit(): void {    
    this.heroes=this._heroserv.getHeroeAcc(this._sessionStorage.getSessionStorage('userID'));
    
  }

}
