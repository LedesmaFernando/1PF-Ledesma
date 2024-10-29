import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';


const routes: Routes = [
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
    redirectTo:'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
