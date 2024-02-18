import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; //añadir
import { DashboardComponent } from './components/dashboard/dashboard.component'; //añadir
import { NuevoUsuarioComponent } from './components/dashboard/nuevo-usuario/nuevo-usuario.component';//añadir
import { EditarEstudianteComponent } from './components/dashboard/editar-estudiante/editar-estudiante.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent}, //añadir
    {path: 'dashboard', component: DashboardComponent}, //añadir
    {path: 'nuevo', component: NuevoUsuarioComponent}, //añadir
    {path: 'dashboard/editar/:id', component: EditarEstudianteComponent}, //añadir
    {path: '**', redirectTo: 'login'}  //añadir
];
