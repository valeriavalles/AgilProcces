import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [];
  // isHidden: boolean=true;
  constructor(private readonly projectService: ProjectService) { }

  getProjects() {
    this.projectService.getProject().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(rest)
      // console.log(this.projects);
    })
  }

  // detalle(){
  //   // console.log('hola') 
  //   this.isHidden;
  //   // console.log(this.isHidden)
  // }

  ngOnInit(): void {
    this.getProjects();
  }

}
