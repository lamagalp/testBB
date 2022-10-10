import { Component, Input } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent  {

  @Input() personaje: Personaje | undefined;
  
  constructor() { }

}
