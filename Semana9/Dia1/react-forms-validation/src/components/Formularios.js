import React from 'react'
import './../css/formularios.css';
import { useForm } from 'react-hook-form';


const Formularios = () => {

 // 1. usar los hooks de useForm

 // register => funcion que se va a vincular con todos los controles
 // que querramos validar a través de un {ref}

 // handleSubmit => funcion que controla el submit del formulario a validar

 // errors => objeto que contiene la información de los errores en los 
 // controles del formulario
 const { register, handleSubmit, errors } = useForm();

 // Imprimiendo posibles errores 
 console.log(errors);

 const onSubmit = data => {
  // La data sólo va a llegar sí y sólo sí todos los campos del form
  // han sido validados correctamente
  console.log("Formulario validado correctamente");
  console.log(data);

 };


 return (
  <form className="App" onSubmit={handleSubmit(onSubmit)}>
   <h1>Sign Up</h1>
   <label>First Name:</label>
   <input name="firstName" ref={register({ required: true, })} />
   {errors.firstName && errors.firstName.type === "required" ? <p>Este campo es obligatorio</p> : null}

   <label>Last Name:</label>
   <input name="lastName" ref={register({ required: true })} />
   {errors.lastName && errors.lastName.type === "required" ? <p>Este campo es obligatorio</p> : null}

   <label>Gender</label>
   <select name="gender" ref={register({ required: true })}>
    <option value="">Select...</option>
    <option value="masculino">Male</option>
    <option value="femenino">Female</option>
   </select>
   {errors.gender && errors.gender.type === "required" ? <p>Este campo es obligatorio</p> : null}

   <label>Username</label>
   <input name="username" ref={register({ required: true })} />
   {/* El operador ternario a continuacion dice: */}
   {/* ¿Existe el atributo username en el objeto errors? */}
   {errors.username && errors.username.type === "required" ? <p>Este campo es obligatorio</p> : null}

   <label>Email</label>
   <input name="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
   {errors.email && errors.email.type === "pattern" ? <p>Ingresa un correo real</p> : null}
   {errors.email && errors.email.type === "required" ? <p>El campo es obligatorio</p> : null}

   <label>About you</label>
   <textarea name="aboutyou" ref={register({ required: true })} />
   {errors.aboutyou && errors.aboutyou.type === "required" ? <p>Este campo es obligatorio</p> : null}

   <input type="submit" />
  </form>
 );
}

export default Formularios
