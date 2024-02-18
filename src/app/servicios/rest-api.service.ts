import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //añadido
import { Observable } from 'rxjs';  //añadido

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  private apiURL = 'http://192.168.100.48:3000/estudiantes'; //EndPoint  <- añadido
  constructor(private http: HttpClient) { }  //añadido -> private http: HttpClient
  // GET
  getEstudiantes(): Observable<any>{  // Observable -> es el delay para obtener datos desde la url
    //console.log('te devuelvo estudiantes');
    return this.http.get(this.apiURL);   // "GET" -> obtiene los datos desde apiURL
  }
  // POST
  guardarEstudiantes(nuevo_estudiante: any): Observable<any>{
    return this.http.post(this.apiURL, JSON.stringify(nuevo_estudiante));
  }
  // PUT
  editarEstudiante(id: string, datos_nuevos: any): Observable<any>{
    return this.http.put(`${this.apiURL}/${id}`, JSON.stringify(datos_nuevos))
  }
  //DELETE
  eliminarEstudiante(id: string): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${id}`)
  }
  // GET por ID
  getEstudiante(id: string): Observable<any>{
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
