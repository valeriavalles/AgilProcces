import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {

  projects = [];

  constructor(private readonly projectService: ProjectService) { }

  getProjects() {
    this.projectService.getProject().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(rest)
      // console.log(this.projects);
    })
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
