import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroes: string[] = ["Spiderman","Iroman","Thor","Holk","Capitan"]
  heroBorrado: string = "";
  
  
  borrarHero(){
    this.heroBorrado = this.heroes.shift() || ""
    console.log(this.heroBorrado)
  }

}
