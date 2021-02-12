import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    /**
     * sendEmail
     */
    public sendEmail(formData: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Headers','Content-Type');
        return this._http.post(this.url+'sendEmail', formData,{headers: headers});
    }
    
}