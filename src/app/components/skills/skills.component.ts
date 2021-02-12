import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skills.service';
import { Global } from '../../service/global';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillService]
})
export class SkillsComponent implements OnInit {
	public skills: Skill[];
	public url: string;

  constructor(
  	private _skillService: SkillService,  
  ) {
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	this.getSkills();
  }

  getSkills(){
  	this._skillService.getSkills().subscribe(
  		response => {
  			if(response.skills) this.skills = response.skills;
  			console.log(this.skills);
  		},
  		error => {
  			console.log(<any>error);
  		}
  		);
  }

}
