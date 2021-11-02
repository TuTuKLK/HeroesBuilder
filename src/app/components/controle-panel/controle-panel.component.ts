import { IHeroe } from './../../interface/heroe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-panel',
  templateUrl: './controle-panel.component.html',
  styleUrls: ['./controle-panel.component.scss']
})
export class ControlePanelComponent implements OnInit {
  @Input() heroe!:IHeroe

  constructor() { }

  ngOnInit(): void {
  }

}
