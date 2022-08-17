import {Component} from '@angular/core'

@Component({
    selector: "app-counter ",
    template :`
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3> 
    
        <button (click)="accomulate(base)"> {{base}} </button>
        <span> {{number}} </span>
        <button (click)="accomulate(-base)"> -{{base}} </button> 
    
    
    `       
})
export class CounterComponent { 
    title: string = 'Count App';
    number: number = 10; 
    base: number = 5;
  
    accomulate(valor: number) {
      this.number += valor;
    }
}