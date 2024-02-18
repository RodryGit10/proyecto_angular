import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; //añadir
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RestApiService } from '../../../servicios/rest-api.service';  //añadido
import { FormsModule } from '@angular/forms';  //añadido
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';  //añadir

import { Router } from '@angular/router'; //añadir

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, 
    MatButtonModule, FormsModule, ReactiveFormsModule], //añadir -> NavbarComponent
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})

export class NuevoUsuarioComponent {

  servicio_rest = inject(RestApiService);
  router = inject(Router);

  formNuevo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    carrera: new FormControl('', Validators.required)
  })

  guardarDatos(): void{
    //Llamar al servicio REST para enviar los datos con el método POST
    this.servicio_rest.guardarEstudiantes({
      "nombre": this.formNuevo.value.nombre,
      "apellido": this.formNuevo.value.apellido,
      "edad": this.formNuevo.value.edad,
      "carrera": this.formNuevo.value.carrera,
    }).subscribe(datos => {
      console.log("El nuevo estudiante esta guardado correctamente");
      console.log(datos);
    })
  }

  irDashboard(): void{
    this.router.navigateByUrl('/dashboard');
  }
}
