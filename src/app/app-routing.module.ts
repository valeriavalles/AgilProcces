import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { DetailsProjectComponent } from './layouts/details-project/details-project.component';
import { RegistersComponent } from './layouts/registers/registers.component';
import { DefaultHomeComponent } from './layouts/default-home/default-home.component';

const routes: Routes = [
  // { path:'', component:LoginComponent},
  { path:'dashboard', 
    component:DashboardComponent,
    children :[
      {
        path:'', 
        component: DefaultHomeComponent,
      },
      {
        path:'home', 
        component: DefaultHomeComponent,
      },
      {
        path:'projects', 
        component: ProjectsComponent,
        // children: [{
        //   path: 'details',
        //   component: DetailsProjectComponent,
        // }]
      },
      {
        path:'registers', 
        component: RegistersComponent ,
      }
      
    ] },

  { path:'login', component:LoginComponent},
  // { path:'projects', component:ProjectsComponent },
  // { path:'dashboard/details', component:DetailsProjectComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
