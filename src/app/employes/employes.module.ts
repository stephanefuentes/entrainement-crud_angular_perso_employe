import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployesComponent } from './employes/employes.component';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";// permet le routerLink

import { ReactiveFormsModule } from "@angular/forms";
import { EmployeFormComponent } from './employe-form/employe-form.component';





@NgModule({
  declarations: [EmployesComponent, EmployeFormComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule]
})
export class EmployesModule {}
