import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { DetailsProjectComponent } from './layouts/details-project/details-project.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'dashboard', component:DashboardComponent },
  { path:'projects', component:ProjectsComponent },
  // { path:'dashboard/details', component:DetailsProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
