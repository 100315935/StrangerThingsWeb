import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { aOpciones, aSeries } from '../modelos/data';
import {  OpcionesIf, SeriesIf } from '../modelos/master';
import { InfoNewsIf } from '../modelos/infoNewsIf';


@Component({
  selector: 'sta-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  opciones: Array<OpcionesIf>;
  series: Array<SeriesIf>;
  infonews: InfoNewsIf;
  id: string;
  show: boolean;

@ViewChild('formPrinter') formulario: any;

  constructor() {
    this.show = true;
   }

  ngOnInit() {
    this.opciones = aOpciones;
    this.series = aSeries;
    this.infonews = {
      user: {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: ''
      },
      opcion: {id: '', name: ''},
      serie: { id: '', name: ''}


    };
  }

  enviar() {
    console.log('Datos Enviados');
  }

  borrar() {
   this.formulario.reset();
  }

  mostrar(id) {
    if (id === 'Si') {
        console.log(id);
        this.show = false;
    } else {this.show = true; }
  }
}

