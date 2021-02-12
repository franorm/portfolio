import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SigninService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    makeSigninRequest(userEmail: string, userPassword: string){
        let user = {
            email: userEmail,
            password: userPassword
        };
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.post(this.url+'/signin',params,{headers: headers});
    }
}