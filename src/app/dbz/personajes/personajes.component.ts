import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbs.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  get personajes() {
    return this.dbzService.personajes
  }

  constructor( private dbzService: DbzService ) {

  }
}
