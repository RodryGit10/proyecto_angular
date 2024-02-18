import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'; //añadir
import {MatFormFieldModule} from '@angular/material/form-field'; //añadir
import {MatButtonModule} from '@angular/material/button';  //añadir
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';  //añadir

import { Router } from '@angular/router'; //añadir

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule,
    ReactiveFormsModule], //añadir -> MatInputModule, MatFormFieldModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logo = "../../../assets/profile.png";

  constructor(private router: Router){

  }

  formLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
  });

  ingresar(): void {
    // Codigo para verificar usuario y contraseña
    this.router.navigateByUrl('/dashboard');

  }

}
