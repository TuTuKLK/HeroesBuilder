import { ControlePanelComponent } from './components/controle-panel/controle-panel.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LootComponent } from './components/loot/loot.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { StorageComponent } from './components/storage/storage.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './components/heroe/create-hero/create-hero.component';
import { CreateLootComponent } from './components/loot/create-loot/create-loot.component';
import { CreateStorageComponent } from './components/storage/create-storage/create-storage.component';


const routes: Routes = [
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path: 'acceuil', component:HomeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'auth', component:AuthComponent},
  {path: 'auth/register', component:RegisterComponent},
  {path: 'panel', component:ControlePanelComponent},
  {path: 'heroe', component:HeroeComponent},
  {path: 'heroe/new', component:CreateHeroComponent},
  {path: 'storage', component:StorageComponent},
  {path: 'storage/new', component:CreateStorageComponent},
  {path: 'loot', component:LootComponent},
  {path: 'loot/new', component:CreateLootComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
