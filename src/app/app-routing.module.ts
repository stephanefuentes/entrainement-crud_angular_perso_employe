import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployesModule } from './employes/employes.module';

import { EmployeFormComponent } from './employes/employe-form/employe-form.component';
import { EmployesComponent } from './employes/employes/employes.component';


const routes: Routes = [
  { path: "employes", component: EmployesComponent },
  { path: "employes/:id", component: EmployeFormComponent },
  { path: "", redirectTo: "/employes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployesModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
