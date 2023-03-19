import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbs.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento)
    console.log(this.personajes)
  }
}