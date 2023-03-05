import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 40;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase(); 
    }

    obtenerNombre = (): string => {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre = (): void => {
        if (this.nombre === 'Spiderman') {
            this.nombre = 'Ironman'
        } else { 
            this.nombre = 'Spiderman';
        }
    }

    cambiarEdad = (): void => {
        if (this.edad === 40) {
            this.edad = 32;
        } else {
            this.edad = 40
        }
    }
}