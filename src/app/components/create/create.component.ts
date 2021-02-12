import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skills.service';
import { UploadService } from '../../service/upload.service';
import { FormsModule }   from '@angular/forms';
import { Global } from '../../service/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [SkillService, UploadService]
})
export class CreateComponent implements OnInit {

	public title: string;
	public skill: Skill;
	public status: boolean;
	public filesToUpload: Array<File>;

  constructor(
  	private _skillService: SkillService,
  	private _uploadService: UploadService
  	) {
  	this.title = 'Ingresa una nueva habilidad';
  	this.skill = new Skill('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
  	console.log(this.filesToUpload);
  	this._skillService.saveSkill(this.skill).subscribe(
  		response => {console.log(response);
  			if(response.skill){
  				this.status = true;
  				this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.skill._id, [], this.filesToUpload, 'image').then((result:any)=>{
  					form.reset();
  				});
  			}
  			else this.status = false;
  			},
  		error => {console.log(error)}
  		);
  }

  fileChangeEvent(fileInput: any){
	  console.log(fileInput);
		this.filesToUpload = <Array<File>> fileInput.target.files;
  }

}
