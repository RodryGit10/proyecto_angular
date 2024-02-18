import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { RestApiService } from '../../../servicios/rest-api.service';  //añadido
import { FormsModule } from '@angular/forms';  //añadido
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';  //añadir
import { Router } from '@angular/router'; //añadir


@Component({
  selector: 'app-editar-estudiante',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-estudiante.component.html',
  styleUrl: './editar-estudiante.component.css'
})
export class EditarEstudianteComponent {


  servicio_rest = inject(RestApiService);
  router = inject(Router);

  formNuevo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    carrera: new FormControl('', Validators.required)
  })

  editarDatos(): void {
    
  }

  irDashboard(): void{
    this.router.navigateByUrl('/dashboard');
  }
}
