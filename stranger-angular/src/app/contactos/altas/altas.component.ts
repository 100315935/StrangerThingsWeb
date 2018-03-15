import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../../modelos/contactos';
import { aOpciones, aSeries } from '../../modelos/data';
import { OpcionesIf, SeriesIf } from '../../modelos/master';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sta-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {

  opciones: Array<OpcionesIf>;
  series: Array<SeriesIf>;
  opcion: OpcionesIf;
  serie: SeriesIf;
  show: boolean;

  @ViewChild('form1') formUser: any;
  oContacto: Contacto;
  oValidado: Object;
  @Output() outAddContacto: EventEmitter<Contacto>;

  constructor() {
    this.outAddContacto = new EventEmitter();
    this.show = true;
   }

  ngOnInit() {
    this.opciones = aOpciones;
    this.series = aSeries;
    this.opcion = {id: '', name: ''};
    this.serie = { id: '', name: ''};
    this.resetContacto();
    this.oValidado = {'was-validated': true};
    console.log(this.formUser);
  }

  enviar() {
    console.log('Datos enviados');
    this.outAddContacto.emit(this.oContacto);
    this.resetContacto();
    this.formUser.reset();
  }

  btnBorrar() {
    this.formUser.reset();
  }

  private resetContacto() {
    this.oContacto = {id: undefined, nombre: '', apellido: '', telefono: '', email: '', serie: ''};
  }

  mostrar(id) {
    if (id === 'Si') {
        console.log(id);
        this.show = false;
    } else {this.show = true; }
  }
}
