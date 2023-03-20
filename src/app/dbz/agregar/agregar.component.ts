import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbs.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar = () : void => {
    if(this.nuevo.nombre.trim().length === 0) { return; }

    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    } 
  }

  constructor( private dbzService: DbzService) {

  }
}
