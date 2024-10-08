// Repaso de  Ciclo y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(14deg, rgba(0,250,50,10) 0%, rgba(150,250,30,1) 33%, rgba(150,250,50,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Práctica 07: Arreglos en Java Script")


console.log("%c1.- Si/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba lógica de verdadero  o falso
let fechaActual= new Date();

console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días

if(fechaActual.getHours()<12)
console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`);
        

// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date(anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInvierno = new Date(anio, 11,21);

let horarioVerano=false;

if(fechaActual >= inicioPrimavera || fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floracion de muchas plantas ...")
    console.log("Los días son más largos y las noches más cortas ...")
    console.log("Muchos animales despiertan de la hibernación ...")
    console.log()
    estacion="Primavera"
    horarioVerano=true;
}
else if(fechaActual>=inicioVerano || fechaActual<inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada abundan los dias soleadps y calurosos ...")
    console.log("En esta temporada el indice de turismo vacacional sube ...")
    console.log("Muchos gente busca realizar las actividades al aire ...")
    estacion="Verano"
    horarioVerano=true;
}
else if(fechaActual>=inicioOtonio || fechaActual<inicioInvierno)
    {
        console.log("Estamos en OTOÑO...")
        console.log("Los árboles suelen cambiar de follaje")
        console.log("Se registran temperaturas mas templadas")
        console.log("Los animales empiezan con la recoleccion de alimento y preparan sus espacios para la hibernacion, incluso algunas aves migran. ")
        estacion="Otoño"
        horarioVerano=true;
    }
else
{
    console.log("Estamos en Invierno...")
    console.log("En esta temporada los dias son más cortos y las nochesmas largas ...")
    console.log("En algunas regiones puede nevar ...")
    console.log("Dadas las temperaturas se recomienda abrigarse  ...")
    console.log()
    estacion="Invierno"
    horarioVerano=false;
}
console.log("%c2.- Operador Ternario (validacion? cumple:no_cumple) ", style_console);
//En java Script exista una operacion simplificada que valida si una condicion se cumple o no, y que hacer en cada caso

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;
let evaluarMayoriaEdad = (edad)=>
    edad>=18?"Eres mayor de edad":"No eres mayor de edad"

console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona))

//Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais pos cuestiones legales,por lo que debemos considerar un segundo parametro en la evaluacion.

evaluarMayoriaEdad = (edad,pais)=>
    (edad>=18 && pais === "MX")?`En${pais} eres mayor de edad`:`En ${pais}NO eres mayor de edad`;

console.log("Evaluando la mayoria de edad de una persona en México ..")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos ..")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.- SWITCH - CASE (Elección por valor definido) ", style_console);
//Calculando tu generacion en base a tu edad 
let anioNacimiento=2005;

switch(true)
{
    case (anioNacimiento<1968): //Baby Boomers
    return "Baby Boomers"

    case(anioNacimiento>1968 && anioNacimiento<=1980):
    return "Generacion X"

    case(anioNacimiento>1981 && anioNacimiento<=1993):
    return "Generacion Y"

    case(anioNacimiento>1968 && anioNacimiento<=1980):
    return "Generacion Z"

    case(anioNacimiento>1994 && anioNacimiento<=2010):
    return "CENTENIALS "

    case(anioNacimiento>2010):
    return "KRYSTAL"
    

}

console.log(`Dado que nacio en el año 1997 soy de la generacion: ${asinaGeneracion }`)


