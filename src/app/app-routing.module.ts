import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginform',
    pathMatch: 'full',
  }, {
    path: 'loginform',
    component: LoginComponent,
    pathMatch: 'full',
  }, {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  }, {
    path: 'user-list/:user',
    component: UserListComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
