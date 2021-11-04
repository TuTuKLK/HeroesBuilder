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



  constructor(private _heroserv:HeroesService,private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.creatHeroForm=this._fb.group({
      UserAccount: '',
      Name: '',
      FirstName: '',
      Gender: '',
      Race: '',
      Experience: '',
      Level: '',
      Health: '',
      Strength: '',
      Dexterity:'',
      Constitution:'',
      Intelligence:'',
      Wisdom:'',
      Charisma:''
    })
    console.log(this.creatHeroForm);
  }

  submitHero(){
    this._heroserv.postRegister(this.creatHeroForm.value)
    console.log(this.creatHeroForm);
    
  }

}
