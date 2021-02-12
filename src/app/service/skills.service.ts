import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Skill } from '../models/skill';
import { Global } from './global';


@Injectable()
export class SkillService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio en angular';
	}

	getSkills(): Observable<any>{
		let headers = new HttpHeaders().set('Content-type','application/json');
		return this._http.get(this.url+'skills', {headers: headers});
	}

	saveSkill(skill: Skill): Observable<any>{
		let params = JSON.stringify(skill);
		let token = <string> JSON.parse(localStorage.getItem('token')).token;
		let headers = new HttpHeaders({
			'Content-type': 'application/json',
			'Authorization': token,
		});
		
		console.log(headers);
		return this._http.post(this.url+'/save-skill', params, {headers: headers});
	}

}