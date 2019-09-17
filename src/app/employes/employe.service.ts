import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from './employe';

@Injectable({
  providedIn: "root"
})
export class EmployeService {
  constructor(private http: HttpClient) {}

  public getAllEmployes() {
    return this.http.get<Employe[]>(
      "https://5d70b592d3448a001411ac77.mockapi.io/api/employes"
    );
  }

  public getEmployee(id: number) {
    return this.http.get<Employe>(
      "https://5d70b592d3448a001411ac77.mockapi.io/api/employes" + "/" + id
    );
  }

  public update(employe: Employe) {
    return this.http.put<Employe>(
      "https://5d70b592d3448a001411ac77.mockapi.io/api/employes" +
        "/" +
        employe.id,
      employe
    );
  }

  public delete(id: number) {
    return this.http.delete<Employe>(
      "https://5d70b592d3448a001411ac77.mockapi.io/api/employes" +"/"+id
    );
  }

  public create(employe) {}
}
