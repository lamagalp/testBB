import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';
import { BreakingBadService } from 'src/app/services/breaking-bad.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] | undefined;
  personajesCopy: Personaje[] | undefined;

  constructor(private _serviceBB: BreakingBadService) {    
    this._serviceBB.getData().subscribe(
      (rta) => {
        console.table(rta);

      /*   this.personajes = rta.map((char:any) => {
          return {           
            char_id : char.char_id,
            name: char.name,
            nickname: char.nickname,
            img: char.img,
            status: char.status,
            occupation: char.occupation
          }
        }) */

        this.personajes = rta.map(({char_id, name, nickname, img, status, occupation}: Personaje) => {
          return {           
            char_id : char_id,
            name: name,
            nickname: nickname,
            img: img,
            status: status,
            occupation: occupation
          }
        })
        this.personajesCopy=this.personajes;
      }
    );
  }


  filter(e: any){
    const search: string = e.target.value;
    console.log({search});

    //TODO hacer el filtro
    this.personajes = this.personajesCopy?.filter(({name}:Personaje) =>{
      return name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
