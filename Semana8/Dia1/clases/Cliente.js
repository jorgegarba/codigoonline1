import { Persona } from './Persona.js';
export class Cliente extends Persona {

 nroCliente;
 // no se pueden hacer operaciones en las clases
 // a no ser que sean dentro de una funcion
 // nombre = "asdasd";
 // let x = 90;

 // CONSTRUCTOR DE UNA CLASE
 // Sirve para poder inicializar valores por defecto
 // en los atributos de un objeto creado
 constructor(_nombre, _apellido, _dni, _id, _nroCliente) {
  // Cuando una clase hija tiene un constructor,
  // es obligatorio llamar al constructor de la clase
  // padre
  // super(); seria como colocar constructorDelPadre();
  super(_nombre, _apellido, _dni, _id);
  // el constructor es una funcion reservada de la clase
  this.nroCliente = _nroCliente;
 }

 imprimirDatos() {
  console.log("Nombres completos");
  console.log(`${this.nombre} ${this.apellido}`);
 }


 set nroClienteFinal(nuevoNroCliente) {
  this.nroCliente = nuevoNroCliente;
 }

 get nroClienteFinal() {
  return this.nroCliente
 }


}
