import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeService } from '../employe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-employe-form",
  template: `
    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input formControlName="firstName" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <input
          formControlName="lastName"
          type="text"
          class="form-control"
          
        />
      </div>

      <div class="form-group">
        <input formControlName="email" type="email" class="form-control" />
      </div>

      <button type="submit" class="btn btn-success">Envoyer</button>
    </form>
  `,
  styles: []
})
export class EmployeFormComponent implements OnInit {

  form: FormGroup;

  employe: Employe;

  constructor(private service: EmployeService,
               private route: ActivatedRoute,
               private router: Router) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if( id != "new")
    {
      this.service.getEmployee(+id).subscribe( retourEmployee => {
        
        this.employe = retourEmployee;
        this.initiliazeForm();
        return;
        },
        error => alert('problemo lors de la recup de l employé')
      );
     
    }
     this.initiliazeForm();

  }


  initiliazeForm() {
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl("")
    });

    if (this.employe)
    {
      this.form.setValue({
        firstName: this.employe.firstName,
        lastName: this.employe.lastName,
        email: this.employe.email
      });
    }
  }


  handleSubmit()
  {
    if(this.employe)
    {
      // update
      
      const employe = { ...this.employe, ...this.form.value };

      // On envoie une requête d'update et on observe le résultat 
      this.service.update(employe).subscribe(
        () => {
          console.log('tu as vu nico ?');
          alert('bien modifié');
          this.router.navigateByUrl("/employes");
        }
      );

      return;

    }

    this.service.create(this.form.value).subscribe( 
      (employe: Employe) => {
        // Redirection vers la page du employe
        // /employes/:id
        this.router.navigateByUrl('/employes/' + employe.id);

       }
    );
  }
  


}
