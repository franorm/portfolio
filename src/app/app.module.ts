import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import * as $ from "jquery";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    CreateComponent,
    DeleteComponent,
    HomeComponent,
    ProyectoComponent,
    CreateProjectComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 

  constructor(){}

  ngOnInit(){}
}