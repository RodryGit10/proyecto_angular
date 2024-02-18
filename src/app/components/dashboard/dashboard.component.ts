import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';  //añadir
import {MatTableModule} from '@angular/material/table'; //añadir
import { RestApiService } from '../../servicios/rest-api.service'; //añadido


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule], //añadir -> NavbarComponent, MatTableModule
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  datos:any[] = [];
  constructor(private servicio_rest: RestApiService){};
  nombres_columnas: string[] = ['numerar','nombre', 'apellido', 'edad', 'carrera',];
  ngOnInit(): void {
    this.servicio_rest.getEstudiantes().subscribe(datos => {
      this.datos = datos;
    });
  }

}
