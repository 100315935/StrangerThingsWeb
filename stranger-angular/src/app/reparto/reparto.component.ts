import { Component, OnInit } from '@angular/core';
import { RepartoIf } from '../modelos/master';
import { aReparto } from '../modelos/data';

@Component({
  selector: 'sta-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})
export class RepartoComponent implements OnInit {

  reparto: Array<RepartoIf>;
  clave: string;
  show: boolean;
  show2: boolean;
  elegido: RepartoIf;

  constructor() {
   }

  ngOnInit() {
    this.reparto = aReparto;
    this.show = true;
    this.show2 = false;
    this.elegido = {
        personaje: '',
        actor: '',
        edad: '',
        descripcion: '',
        foto: ''
      };
  }

  buscar(clave) {
      aReparto.forEach(element => { if (element.personaje === clave || element.actor === clave) {
        this.elegido = element;
        this.show = false;
        this.show2 = true;
      }
      });
  }

  elegir(elegido) {
    this.elegido = elegido;
    this.show = false;
    this.show2 = true;
  }
  ocultar() {
    this.show = true;
    this.show2 = false;
  }
}
