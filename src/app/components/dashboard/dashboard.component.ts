import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';  //añadir
import {MatTableModule} from '@angular/material/table'; //añadir
import { RestApiService } from '../../servicios/rest-api.service'; //añadido
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router'; //añadir
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule], //añadir -> NavbarComponent, MatTableModule
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  datos:any[] = [];
  constructor(private servicio_rest: RestApiService, private router: Router){};
  nombres_columnas: string[] = ['numerar','nombre', 'apellido', 'edad', 'carrera', 'accion'];
  ngOnInit(): void {
    this.servicio_rest.getEstudiantes().subscribe(datos => {
      this.datos = datos;
    });
  }

  eliminar(nombre: string, id: string): void {
    if(confirm("¿Está seguro de eliminar a " + nombre + "?")){
      this.servicio_rest.eliminarEstudiante(id).subscribe(datos => {
            console.log('Se elimino correctamente');
            this.servicio_rest.getEstudiantes().subscribe(datos => {
              this.datos = datos;
            });
      });
    } else {
      console.log('Operación de eliminación cancelada');
    }
  }

  editar(id: string): void {
    this.router.navigateByUrl('/dashboard/editar/'+id);
  }
}
