import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {
	public facebook: string;
	public instagram: string;
  public linkedin: string;
  
  public email: string;
  public subject: string;
  public message: string;
  public name: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _emailService: EmailService) {
  	this.facebook = "https://www.facebook.com/fran.ormeno.58/";
  	this.instagram = "https://www.instagram.com/fran_orm/";
  	this.linkedin = "https://www.linkedin.com/in/formeno195/";
  }

  ngOnInit(): void {
  }

  	goToFacebook(): void{
  	this.document.location.href = this.facebook;
  }
	goToInstagram(): void{
  	this.document.location.href = this.instagram;
  }

 	goToLinkedin(): void{
  	this.document.location.href = this.linkedin;
  }

  onSubmit(form){
    let formData ={
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    }
    /*
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
      console.log(xhr.responseText);
      if(xhr.responseText == 'success'){
        alert('Email enviado');
      }
    }

    xhr.send(JSON.stringify(formData));
    */


    this._emailService.sendEmail(JSON.stringify(formData)).subscribe(response =>{
      form.reset();
      alert("Email sent!");
    },
    error =>{
      console.log(error);
    });
  }

}
