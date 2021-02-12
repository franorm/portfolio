import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { UploadService } from '../../service/upload.service';
import { FormsModule }   from '@angular/forms';
import { Global } from '../../service/global';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectComponent implements OnInit {
	public title: string;
	public proyecto: Project;
	public status: boolean;
	public filesToUpload: Array<File>;

  constructor(
  	private _projectService: ProjectService,
  	private _uploadService: UploadService
  	) {
  	this.title = 'Ingresa un nuevo proyecto ';
  	this.proyecto = new Project('', '', '', '', '', '','');
  }
  ngOnInit(): void {
  }

  onSubmit(form){
  	console.log(this.filesToUpload);
  	this._projectService.saveProject(this.proyecto).subscribe(
  		response => {console.log(response);
  			if(response.project){
  				this.status = true;
  				this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any)=>{
  					form.reset();
  				});
  			}
  			else this.status = false;
  			},
  		error => {console.log(error)}
  		);
  }

  fileChangeEvent(fileInput: any){
  	this.filesToUpload = <Array<File>> fileInput.originalTarget.files;
  }
}
