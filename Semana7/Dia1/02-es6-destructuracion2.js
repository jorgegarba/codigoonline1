// Destructuracion de objetos
let objPersona = {
  nombre: "Jorge",
  apellido: "Garnica",
  dni: "11223344",
  edad: 20,
  nacionalidad: {
    pais: "Perú",
    gentilicio: "Peruano",
  },
  coloresFavoritos: ["Azul", "Negro", "Rojo"],
};
// copiando el atributo 'nombre'
let { nombre, edad } = objPersona;
console.log(nombre, edad);

// copiando el atribugo 'apellido' con OTRO identificador u otra variable
let { apellido: ape } = objPersona;
console.log(ape);

// copiando el atributo 'gentilicio' del objeto;
let {
  nacionalidad: { gentilicio },
} = objPersona;
console.log(gentilicio);

// copiar todos los atributos de un objeto a otro.
let nuevoObjPersona = { ...objPersona };
console.log(nuevoObjPersona);

const nombresCompletos = ({ nombre, apellido }) => {
  console.log(`datos => ${nombre} ${apellido}`);
};

nombresCompletos(objPersona);
