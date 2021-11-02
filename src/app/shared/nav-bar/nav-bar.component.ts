import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public links: Link[]=[
    {title: 'Connexion', path: 'auth'},
    {title: 'Acceuil', path:''},
  ];
  public userlinks: Link[]=[
    {title: 'Héro', path: 'heroe'},
    {title: 'Stockage', path: 'storage'},
    {title: 'Items', path: 'loot'},
  ];
  constructor() { 
  }

  ngOnInit(): void {

  }

}


