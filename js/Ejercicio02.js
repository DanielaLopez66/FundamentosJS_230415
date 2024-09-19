//Tipos de datos en JS

//1.Underfined
console.warn("---Tipo de Dato UNDEFIED ---")
let cliente;
console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable cliente es:  ${typeof (cliente)}`);

cliente = "Daniela Lopez"
console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable cliente es:  ${typeof (cliente)}`);

cliente = 230415
console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable cliente es:  ${typeof (cliente)}`);


// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

//2.BOOLEAN  - Boleanos - TRUE/FALSE (Falso/Verdadero)
console.warn("--Tipo de Dato : BOOLEAN (Boleano - True/False")
let esPremium = "No lo se";

console.log(`¿Es un cliente premium?: ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es  ${typeof (esPremium)}`);

console.log("Asignando el valor true a la variable.")
esPremium = "true"
console.log(`El tipo de dato de la variable esPremium es  ${typeof (esPremium)}`);

console.log("Asignando el valor true a la variable.")
esPremium = true
console.log(`El tipo de dato de la variable esPremium es  ${typeof (esPremium)}`);
console.log(`¿Es el cliente Premium: ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium = 0;

if (esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
    console.log("El cliente recibe los servicios gratuitos ");


// 3. NUMBER (Numeros)

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("---- Tipo de Dato -NUMBER (Numeros, positivos, decimales, flotantes)");
console.log(`Tu saldo al dia de hoy es de : ${saldo_cuenta} ,(Tipo de dato = ${typeof (saldo_cuenta)})`);


console.log(`El producto que has seleccionado cuesta : ${costo_producto} (T)`)
cantidad = 8;
console.log(`Has elegido comprar : ${cantidad} de productos .`)
console.log(`El importe total de la compra es : ${(cantidad * costo_producto)}`)
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu saldo nuevo es de : ${saldo_cuenta}`);

//El cliente realiza un abono de 1500 
monto_transaccion = 1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de : ${saldo_cuenta + monto_transaccion}`)

//4. STRING (Cadena de Caracteres)

const alumno = "Ana Daniela Lopez Neri"
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caracteres");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof (alumno)}`);

//Inicializamos el valor de la variable producto
producto = "MONITOR 20\"FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof (producto)}`);

// Manipulando los STRINGS
console.log(`Mas adelante podremos transformar el contenido de los STRING usando los metodos y funciones especificas, cómo convertir su valos a mayusculas: ${alumno}=> ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minusculas: ${producto} => ${producto.toLowerCase()}`)

// 5. BIGINT (Número de Mayor Amplitud)
console.warn("--Tipo de Dato - BIGINT (Número Amplio)");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 1234567890123456789012345678901234567890

console.log(`El primer experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof (numeroGrande)}`)
console.log(`El segundp experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof (numeroGrande2)}`)
console.log(`El tercer experimento de un número grande es: ${numeroGrande3}, que NO es soportado por NUMBER, perdiendo presición y su tipo de dato es: ${typeof (numeroGrande3)}`)
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que NO es soportado por NUMBER, perdiendo presición y su tipo de dato es: ${typeof (numeroGrande4)}`)

numeroGrande3 = BigInt(123456789012345678901234567890)
console.log(`El quinto experimento de un número grande es: ${numeroGrande3}, que ya fue convertido a BIGING, y su tipo de dato es: ${typeof(numeroGrande3)}`)

numeroGrande4 = BigInt(1234567890123456789012345678901234567890)
console.log(`El quinto experimento de un número grande es: ${numeroGrande4}, que ya fue convertido a BIGING, y su tipo de dato es: ${typeof(numeroGrande4)}`)

// ¿Se puede realizar operaciones matematicas entre un NUMBER y un BIGING?
const numero = 129;
console.log(`Intentando realizar la suma de: numero + numeroGrande3, el resultado es: ${BigInt(numero)+numeroGrande3}`)


//6. SYMBOL (Simbolo)
console.warn("--Tipo de Dato SYMBOL (Simbolo o ÚNico)")

const numero1 = 5;
const numero2 = 5.0;
const numero3 = "5";
const numero4 = "5.0";
const numero5 = Symbol(5);
const numero6 = Symbol(5);
const numero7 = Symbol(5.0);
const numero8 = Symbol("5");
const numero9 = Symbol("5.0");

// Pruebas comparativas 
console.log("¿Es 5 = 5.0?")
if(numero1== numero2)
    console.log("Se comparó numero1 con numero2, determinando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero2, determinando que NO tienen el mismo valor.")

console.log("¿Es 5 = \"5\"?")
if(numero1== numero3)
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero3, determinando que NO tienen el mismo valor.")

console.log("¿Es 5 = \"5\"?")
if(numero1 === numero3) // Estrictamente igual (Equidad)= Mismo Valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor, pero NO  el mismo tipo de dato.")

console.log("¿Es 5 = \"5.0\"?")
if(numero1== numero4) // Estrictamente igual (Equidad)= Mismo Valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero4, determinando que NO tienen el mismo valor.")

console.log("¿Es 5 = \"5.0\"?")
if(numero1 === numero4) // Estrictamente igual (Equidad)= Mismo Valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor, pero NO  el mismo tipo de dato.")

console.log(`¿Es 5 == Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 de tipo ${typeof(numero5)}`)
if(numero1 === numero5) 
    console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor, pero NO  el mismo tipo de dato.")

