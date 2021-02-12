import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../service/signin';
import { FormsModule }   from '@angular/forms';
import { Global } from '../../service/global';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SigninService]
})
export class SigninComponent implements OnInit {
  public title: string;
  public email: string;
  public password: string;

  constructor(
    private _signin: SigninService
  ) {
    this.title = "Ingresa!";
  }

  ngOnInit(): void {
  }

  onSubmit(form){
  	this._signin.makeSigninRequest(this.email, this.password).subscribe(
  		response => {
          sessionStorage.setItem('token', JSON.stringify(response));
        },
        error => {
        console.log(error);
        }
  		);
      
  }

}
