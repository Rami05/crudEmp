import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './employee/add/add.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  
  {
    path : 'employee',
    component : EmployeeComponent
  },
  {
    path : 'employee/add',
    component : AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
