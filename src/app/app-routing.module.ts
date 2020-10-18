import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserComponent } from './user/user.component';
import { ViewformComponent } from './viewform/viewform.component';

​


const routes: Routes = [ 
  { path: 'login', component: LoginpageComponent },
  { path: 'user', component: UserComponent },
  {path: 'viewform', component: ViewformComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
