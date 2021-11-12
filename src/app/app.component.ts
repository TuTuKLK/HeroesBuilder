import { SessionStorageService } from './services/session-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HeroesBuilder';
  constructor(private _sessionStorage: SessionStorageService) {}
  ngOnInit() {
    this._sessionStorage.clearSessionStorage();
  }
}
