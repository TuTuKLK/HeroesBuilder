import { ControlePanelComponent } from './components/controle-panel/controle-panel.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateComponent } from './components/create/create.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LootComponent } from './components/loot/loot.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { StorageComponent } from './components/storage/storage.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path: 'acceuil', component:HomeComponent},
  {path: 'create', component:CreateComponent},
  {path: 'auth', component:AuthComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'auth/register', component:RegisterComponent},
  {path: 'loot', component:LootComponent},
  {path: 'heroe', component:HeroeComponent},
  {path: 'storage', component:StorageComponent},
  {path: 'panel', component:ControlePanelComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
