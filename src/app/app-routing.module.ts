import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,
    loadChildren:()=> import('./features/dashboard/dashboard.module').then((archive)=>archive.DashboardModule)
  },
  {
    path:'auth',
    component: AuthComponent,
    loadChildren:()=> import('./features/auth/auth.module').then((archive)=> archive.AuthModule)
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'**',
    redirectTo:'dashboard/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
