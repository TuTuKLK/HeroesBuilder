import { IHeroe } from './../../interface/heroe';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  public heroes: IHeroe[] = []

  public storage = 'storage'
  constructor(private _heroserv:HeroesService) { }

  ngOnInit(): void {
    this._heroserv.getHeroeAcc(4).subscribe(data=>this.heroes=data)
  }

}
