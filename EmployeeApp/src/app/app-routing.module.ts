import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';


const ROUTES: Routes = [
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'detail', component: DetailEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{  useHash: true });
