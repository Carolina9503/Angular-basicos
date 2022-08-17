import {Component} from '@angular/core'

@Component({
    selector: "app-hero",
    templateUrl: "./hero.component.html"
})
export class HeroComponent {
    nombre: string = "Iroman";
    edad: number = 43;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad}`
    }

    cambiarNombre(): void {
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void{
        this.edad = 21
    }

}