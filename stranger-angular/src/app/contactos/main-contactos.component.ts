import { Component, OnInit } from '@angular/core';
import { Contacto } from '../modelos/contactos';
import { ContactosService } from '../servicios/contactos.service';

@Component({
  selector: 'sta-main-contactos',
  templateUrl: './main-contactos.component.html',
  // tslint:disable-next-line:max-line-length
  styles: ['.main { min-height: 30rem;} .container, .card{border-radius:0.3rem;text-align: center; background-color: rgb(70, 14, 1)} .card-body{background-color:rgb(172, 172, 172)} .card-header{font-family:Benguiat; font-weight: bolder;color: rgb(223, 17, 17)}']
})
export class MainContactosComponent implements OnInit {

  aContactos: Array<Contacto>;
  sContacto: string;

  constructor(public contactosService: ContactosService) { }

  ngOnInit() {
    this.aContactos = [];
    this.contactosService.getContactos().then(
       response =>  this.aContactos = response
     );
  }

  // respuesta a los eventos en el componente lista
  deleteContacto (i) {
    this.contactosService.deleteContacto(i)
    .then(
      () => {this.contactosService.getContactos()
        .then(response =>  this.aContactos = response);
      });

    // TODO hacer que lista se actualice con los nuevos datos
  }

  // respuesta a los eventos en el componente altas
  addContacto (oContacto) {
    this.contactosService.setContactos(oContacto)
    .then(
      () => {this.contactosService.getContactos()
        .then(response =>  this.aContactos = response);
      });
  }
}

