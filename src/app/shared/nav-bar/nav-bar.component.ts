import { Component, OnInit } from '@angular/core';
import { Link } from './link';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public links: Link[];
  constructor() { 
    this.links = [];
  }

  ngOnInit(): void {
    this.links.push(new Link('Accueil', '/'))
    this.links.push(new Link('Connexion', '/shop'))
  }

}


