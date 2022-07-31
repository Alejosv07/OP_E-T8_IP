"use strict";
import { Persona } from "../js/model/Persona.js";

//Funcion auto ejecutable
((c) => {

    /*     
        Crear clase Persona.
    
        Crear variables las privadas edad, nombre y telefono de la clase Persona.
        
        Crear gets y sets de cada propiedad.
        
        Crear un objeto persona en el main.
        
        Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola. 
    */

    const persona = new Persona();
    persona.setEdad = 18;
    persona.setNombre = "Alejandro";
    persona.setTelefono = "+50386794521";

    c.log(`Edad: ${persona.getEdad}, nombre: ${persona.getNombre}, telefono: ${persona.getTelefono}`);
})(console);