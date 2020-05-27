export class Persona {

 id;
 nombre;
 apellido;
 dni;

 constructor(_nombre, _apellido, _dni, _id) {
  this.nombre = _nombre;
  this.apellido = _apellido;
  this.dni = _dni;
  this.id = _id;
 }
 // constructor(objeto = {}) {
 //  for (const key in objeto) {
 //   this[key] = objeto[key];
 //  }
 // }
}

// let objPersona = new Persona({ id: 1, nombre: 'Juan' });
// let objPersona2 = new Persona({ nombre: 'Juan' });
// let objPersona3 = new Persona();