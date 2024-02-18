import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';  //añadir
import {MatButtonModule} from '@angular/material/button'; //añadir
import {MatToolbarModule} from '@angular/material/toolbar'; //añadir
import { RouterOutlet, RouterModule } from '@angular/router'; //añadir -> RouterModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
