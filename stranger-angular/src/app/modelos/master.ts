

export class OpcionesIf {
  constructor(public id: string, public name: string) {}
}

export interface SeriesIf {
  id: string;
  name: string;
}

export interface UserIf {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
}

export interface RepartoIf {
  personaje: string;
  actor: string;
  edad: string;
  descripcion: string;
  foto: string;
}
