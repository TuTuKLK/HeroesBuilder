import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { StorageComponent } from './components/storage/storage.component';
import { LootComponent } from './components/loot/loot.component';
import { CreateComponent } from './components/create/create.component';
import { RegisterComponent } from './components/register/register.component';
import { ControlePanelComponent } from './components/controle-panel/controle-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavBarComponent,
    FooterComponent,
    AuthComponent,
    HeroeComponent,
    StorageComponent,
    LootComponent,
    CreateComponent,
    RegisterComponent,
    ControlePanelComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
