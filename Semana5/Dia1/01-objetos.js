// Objetos 
let persona = {
	dni: "11223344",
	nombre: "Jorge",
	apellidos: "Garnica",
	estadoCivil: "Soltero",
	edad: 28,
	censado: true,
	coloresFavoritos: ["Azul", "Rojo", "Blanco", "Negro"],
	ubicacion: {
		lat: -70.4342,
		lon: 16.23412
	}
};

// Accediendo a los atributos de un objeto
console.log(`${persona.nombre} ${persona.apellidos}`);
console.log(persona);
// Modificar los atrbibuts de un objeto
persona.dni = "99887766";
persona.nombre = "Jorge Luis";
// Asigando un nuevo atributo al objeto persona
persona.email = "jorgegarba@gmail.com"
console.log(persona);
// Recorriendo el arreglo interno de un objeto
for (let i = 0; i < persona.coloresFavoritos.length; i++) {
	console.log(persona.coloresFavoritos[i]);
}

// imprimiendo un objeto interno del objeto persona
console.log(`Latitud: ${persona.ubicacion.lat}`);
console.log(`Longitud: ${persona.ubicacion.lon}`);