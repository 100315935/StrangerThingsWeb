import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sta-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  show: boolean;
  show2: boolean;
  sTitle: string;
  sEtiquetaBtn: string;
  @Input() aItems: Array<any>;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor() {
    this.outBorrarItem = new EventEmitter();
    this.show = true;
    this.show2 = true;
  }

  ngOnInit() {
    this.sTitle = 'Contactos personales';
    this.sEtiquetaBtn = 'Eliminar';
  }

  deleteItem(i) {
    this.outBorrarItem.emit(i);
  }
  mostrar() {
    if (this.show) {
        this.show = false;
    } else {this.show = true; }
  }
  mostrar2() {
    this.show = true;
    this.show2 = false;
  }
}
