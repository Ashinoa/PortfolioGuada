import { Component, OnInit } from '@angular/core';
import { Dimaia } from 'src/app/models/Dimaia'; 
import { Stylebus } from 'src/app/models/Stylebus'; 
import { Donar } from 'src/app/models/Donar'; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  popupVisible: boolean = false;
  
  projectName !: string;
  descriptionProject !: string;
  urlProject !: string;

  dimaiaProject!: Dimaia;
  donarProject !: Donar;
  stylebusProject !: Stylebus;


  ngOnInit(): void {
    this.dimaiaProject = new Dimaia();
    this.donarProject = new Donar();
    this.stylebusProject = new Stylebus();
  }

  
  showDescription(name: string): void {

    if (name.toLowerCase() === this.dimaiaProject.name.toLowerCase()) {
      this.projectName = this.dimaiaProject.name;
      this.descriptionProject = this.dimaiaProject.description;
      this.urlProject = this.dimaiaProject.image;
      this.popupVisible = true;

    } else if (name.toLowerCase() === this.donarProject.name.toLowerCase()) {
      this.projectName = this.donarProject.name;
      this.descriptionProject = this.donarProject.description;
      this.urlProject = this.donarProject.image;
      this.popupVisible = true;

    } else if (name.toLowerCase() === this.stylebusProject.name.toLowerCase()) {
      this.projectName = this.stylebusProject.name;
      this.descriptionProject = this.stylebusProject.description;
      this.urlProject = this.stylebusProject.image;
      this.popupVisible = true;
    }

  }



}
