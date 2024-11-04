import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
 
