import { Component, inject, OnInit  } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { RestApiService } from '../../../servicios/rest-api.service';  //añadido
import { FormsModule, FormBuilder } from '@angular/forms';  //añadido
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';  //añadir
import { ActivatedRoute, Router } from '@angular/router'; //añadir
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-editar-estudiante',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './editar-estudiante.component.html',
  styleUrl: './editar-estudiante.component.css'
})
export class EditarEstudianteComponent implements OnInit{
  datos = {
    nombre: 'nombre',
    apellido: 'apellido',
    edad: 'edad',
    carrera: 'carrera',
  }
  id = '';
  servicio_rest = inject(RestApiService);
  router = inject(Router);
  rutaId = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder)
  
  formNuevo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    carrera: new FormControl('', Validators.required)
  })


  //GET por ID
  ngOnInit(): void {
    this.rutaId.params.subscribe( params => {
      this.id = params['id'];
      this.servicio_rest.getEstudiante(this.id).subscribe(datos => {
        this.datos=datos;
        console.log('Datos del Esudiante: ');
        console.log(datos);
        this.inicializarFormulario();
    })
    })
  }

  inicializarFormulario(): void {
    this.formNuevo = this.formBuilder.group({
      nombre: [this.datos.nombre, Validators.required],
      apellido: [this.datos.apellido, Validators.required],
      edad: [this.datos.edad, Validators.required],
      carrera: [this.datos.carrera, Validators.required]
    });
  }

  editarDatos(): void{
    this.servicio_rest.editarEstudiante(this.id, {
      "nombre": this.formNuevo.value.nombre,
      "apellido": this.formNuevo.value.apellido,
      "edad": this.formNuevo.value.edad,
      "carrera": this.formNuevo.value.carrera,
    }).subscribe(data => {
      alert('Datos Actulizados Correctamente');
      this.router.navigateByUrl('/dashboard');
    })
  }

  irDashboard(): void{
    this.router.navigateByUrl('/dashboard');
  }
}
