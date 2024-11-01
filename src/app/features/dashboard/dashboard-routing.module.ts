import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
 
