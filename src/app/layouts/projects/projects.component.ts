import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [];

  constructor(private readonly projectService: ProjectService) { }

  getProjects() {
    this.projectService.getProject().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(rest)
      // console.log(this.projects);
    })
  }

  detalle(){
    console.log('hola') 
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
