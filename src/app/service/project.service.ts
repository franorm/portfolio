import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio en angular';
	}

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-type','application/json');
		return this._http.get(this.url+'projects', {headers: headers});
	}

	saveProject(project: Project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-type', 'application/json');
		try{
			let token = JSON.parse(localStorage.getItem('token')).token;
			headers.append('authorization', token);
		}catch{
			console.log("No se hap conseguido el token")
		}

		return this._http.post(this.url+'/save-project', params, {headers: headers});
	}

	getProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/json');
		return this._http.get(this.url+'project/'+id, {headers: headers});
    }
}