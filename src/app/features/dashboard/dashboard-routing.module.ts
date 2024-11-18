import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';
import { ClassesModule } from './classes/classes.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

const routes: Routes = [
  {
    path:'users',
    loadChildren: ()=> UsersModule
  },
  {
    path:'courses',
    loadChildren: ()=> CoursesModule
  },
  {
    path:'home',
    loadChildren: ()=> HomeModule
  },
  {
    path:'classes',
    loadChildren: ()=> ClassesModule
  },
  {
    path:'enrollment',
    loadChildren: ()=> EnrollmentModule
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
 
