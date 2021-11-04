import { IHeroe } from './../../interface/heroe';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  public heroes: IHeroe[] = []

  public storage = 'storage'
  public newHeroe = '/heroe/new'
  constructor(private _heroserv:HeroesService,private _fb:FormBuilder) { }


  ngOnInit(): void {
    

    this._heroserv.getHeroeAcc(4).subscribe(data=>this.heroes=data)
  }



}
