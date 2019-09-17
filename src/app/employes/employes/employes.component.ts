import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { Employe } from '../employe';

@Component({
  selector: "app-employes",
  template: `
    <h2>Liste des employés</h2>
    <table class="table table-hover">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
      <tbody>
        <tr *ngFor="let employe of employes">
          <td>{{ employe.id }}</td>
          <td>{{ employe.firstName }} {{ employe.lastName }}</td>
          <td>{{ employe.email }}</td>
          <td>
            <a routerLink="/employes/{{ employe.id }}" class="btn btn-primary"
              >Editer</a
            >
          </td>
          <td>
            <button class="btn btn-danger" (click)="delete(employe.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class EmployesComponent implements OnInit {
  employes: Employe[] = [];

  constructor(private service: EmployeService) {}

  ngOnInit() {
    this.service.getAllEmployes().subscribe(list => (this.employes = list));
  }

  delete(id)
  {
    this.service.delete(id).subscribe(() => {
      alert('ok, suppression bien effectué')
      },
      error => alert('un problème est survenu lors de la suppression')
      )

  }
}
