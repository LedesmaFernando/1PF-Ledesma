import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';

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
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
 
