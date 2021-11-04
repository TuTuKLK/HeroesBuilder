import { HeroesService } from './../../services/heroes.service';
import { IHeroe } from './../../interface/heroe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-panel',
  templateUrl: './controle-panel.component.html',
  styleUrls: ['./controle-panel.component.scss']
})
export class ControlePanelComponent implements OnInit {
  @Input() heroe!:IHeroe

  constructor(private _heroes:HeroesService) { }

  ngOnInit(): void {
  }
  deleteHeroeByID(id:number){
    console.log(id);
    this._heroes.deleteHeroe(id).subscribe()
  }

}
