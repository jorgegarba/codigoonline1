import { Persona } from './Persona.js';


export class Repartidor extends Persona {

 nroMoto;

 constructor(_nombre, _apellido, _dni, _id, _nroMoto) {
  super(_nombre, _apellido, _dni, _id);
  this.nroMoto = _nroMoto;
 }

 setMoto(nuevoNroMoto) {
  this.nroMoto = nuevoNroMoto;
 }
 getMoto() {
  return this.nroMoto;
 }
 


}