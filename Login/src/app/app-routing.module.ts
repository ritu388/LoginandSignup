import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { TableComponent } from './home/table/table.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  { path: 'signup', component: RegistrationComponent},
  { path: 'home', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
