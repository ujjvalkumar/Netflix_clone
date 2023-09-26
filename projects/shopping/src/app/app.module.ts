import { LoginComponent } from './components/login/login.component';
import { NetflixRegister } from './components/netflix.register.component';
import { APP_BOOTSTRAP_LISTENER, NgModule, Component } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixIndexComponent } from './Netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './Netflix/netflix-register/netflix-register.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { CircleComponent } from './components/circle/circle.component';
import { FakestoreComponent } from './components/fakestore/fakestore.component';


@NgModule({
  declarations: [
    AppComponent,
    NetflixRegister,
    LoginComponent,
    HomeComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    DataBindingComponent,
    CircleComponent,
    FakestoreComponent
  ]
  
  ,
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
 
  bootstrap: [FakestoreComponent]
})
export class AppModule { }
