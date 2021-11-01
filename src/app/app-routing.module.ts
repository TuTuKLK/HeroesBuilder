import { RegisterComponent } from './components/register/register.component';
import { CreateComponent } from './components/create/create.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path: 'acceuil', component:HomeComponent},
  {path: 'create', component:CreateComponent},
  {path: 'auth', component:AuthComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'auth/register', component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
