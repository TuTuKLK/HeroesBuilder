import { IAccount } from './../../interface/account';
import { SessionStorageService } from './../../services/session-storage.service';
import { home } from 'src/app/shared/const/home.const';
import { Link } from './../../shared/models/link.model';
import { Component, OnInit } from '@angular/core';

import { UserAccountsService } from './../../services/user-accounts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public registerPath = 'register';
  public valid = '/heroe';
  public cancel = home;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserAccountsService,
    private _sessionStorage: SessionStorageService,
    private _router: Router
  ) {}
  authForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.authForm = this._fb.group({
      Login: '',
      Password: '',
    });
  }
  submitAuth() {
    this._userService.postAuth(this.authForm.value).subscribe((r: IAccount) => {
      this._sessionStorage.setSessionStorage('userID', r.UserID);
      // console.log(!!this._sessionStorage.getSessionStorage('userID'));
      this._userService.userAuthentified =
        !!this._sessionStorage.getSessionStorage('userID');
      this._router.navigate(['heroe']);
    });
  }
}
