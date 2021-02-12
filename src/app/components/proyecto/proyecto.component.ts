import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
  providers: [ProjectService]
})
export class ProyectoComponent implements OnInit {
	public url: string;
	public project: Project;

  constructor(
  	private _projectService: ProjectService,
  	private _router: Router,
  	private _route: ActivatedRoute,
  	@Inject(DOCUMENT) private document: Document
  	) {
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	this._route.params.subscribe( params =>{
  		let id = params.id;
  		this.getProject(id);
  	});
  }

  getProject(id){
  	this._projectService.getProject(id).subscribe( response => {
  		this.project = response.project_returned;
  		console.log(response);
  		},
  		error => {
  			console.log(<any> error);
  		});
  }

  goToUrl(): void{
  	this.document.location.href = this.project.githublink;
  }
}
