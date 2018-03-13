import {SeriesIf, OpcionesIf, RepartoIf} from './master';

export const aOpciones: Array<OpcionesIf> = [
  new OpcionesIf('1', 'Si'),
  new OpcionesIf('2', 'No'),
];

export const aSeries: Array<SeriesIf> = [
  {id: '', name: 'Juego de Tronos'},
  {id: '', name: 'House of Cards'},
  {id: '', name: 'Perdidos'},
  {id: '', name: 'Breaking Bad'},
  {id: '', name: 'Los Simpson'},
  {id: '', name: 'Rick y Morty'},
  {id: '', name: 'CSI'}
];

export const aReparto: Array<RepartoIf> = [
  {personaje: 'Joyce Byers', actor: 'Winona Ryder', edad: '53', descripcion: 'Madre de Will y Jonathan Byers', foto: '../../assets/2.jpg'},
  {personaje: 'Jim Hopper', actor: 'David Harbour', edad: '55', descripcion: 'Jefe del Departamento de Policía de Hawkins', foto: '../../assets/4.jpg'},
  {personaje: 'Michael "Mike" Wheeler', actor: 'Finn Wolfhard', edad: '13', descripcion: ' Hijo de Karen Wheeler y hermano de Nancy Wheeler', foto: '../../assets/7.jpg'},
  {personaje: 'Eleven', actor: 'Millie Bobby Brown', edad: '13', descripcion: 'una niña con habilidades psicocinéticas y un vocabulario limitado.', foto: '../../assets/8.jpg'},
  {personaje: 'Dustin Henderson', actor: 'Gaten Matarazzo', edad: '14', descripcion: '', foto: '../../assets/5.jpg'},
  {personaje: 'Lucas Sinclair', actor: 'Caleb McLaughlin', edad: '14', descripcion: '', foto: '../../assets/6.jpg'},
  {personaje: 'William "Will" Byers', actor: 'Noah Schnapp ', edad: '12', descripcion: 'El hermano menor de Jonathan e hijo de Joyce.', foto: '../../assets/1.jpg'},
  {personaje: 'Nancy Wheeler', actor: 'Natalia Dyer', edad: '25', descripcion: 'hija de Karen, hermana de Mike Wheeler, amiga de Barbara.', foto: '../../assets/3.jpg'},
  {personaje: 'Jonathan Byers', actor: 'Charlie Heaton', edad: '27', descripcion: 'Hermano de Will e hijo de Joyce Byers.', foto: '../../assets/1.jpg'},
  {personaje: 'Steve Harrington', actor: 'Joe Keery', edad: '25', descripcion: ' Un estudiante popular en la escuela secundaria.', foto: '../../assets/1.jpg'},


];


