import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about-me', component: AboutmeComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'project/:id', component: ProyectoComponent},
	{path: 'create-project', component:  CreateProjectComponent},
	{path: 'create-skill', component: CreateComponent},
	{path: 'delete-project', component: DeleteComponent},
	{path: 'contact-me', component: ContactComponent},
	{path: 'skills', component: SkillsComponent},
	{path: 'signin', component: SigninComponent},
	{path: '**', component: HomeComponent}
]

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
