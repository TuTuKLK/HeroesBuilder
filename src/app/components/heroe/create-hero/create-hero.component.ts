import { SessionStorageService } from './../../../services/session-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {
  creatHeroForm: FormGroup = new FormGroup({});
  public cancel = '/heroe'



  constructor(private _heroserv:HeroesService,private _fb:FormBuilder, private _sessionStorage:SessionStorageService) { }

  ngOnInit(): void {
    const userID= this._sessionStorage.getSessionStorage('userID')
    this.creatHeroForm=this._fb.group({
      UserAccount: userID,
      Name: '',
      FirstName: '',
      Gender: '',
      Race: '',
      Experience: '1000',
      Level: '10',
      Health: '100',
      Strength: '10',
      Dexterity:'10',
      Constitution:'10',
      Intelligence:'10',
      Wisdom:'10',
      Charisma:'10'
    })
    console.log(this.creatHeroForm);
  }

  submitHero(){
    this._heroserv.postRegister(this.creatHeroForm.value)
    console.log(this.creatHeroForm);
    
  }

}
