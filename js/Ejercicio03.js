// Repaso de objetos 

const bg = "Linear-gradient(lldeg, rgb(2,0,36,1) 0%, rgba(9,9,121,1) 3%, rgb(0,212,255,1) 86%)"; 
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding: 4px; font-sixe: 1.0rem; font-weight: bold`

//Personalizacion de las salidas a consola
console.warn("Practica 05: Repaso de Objetos en Java Script");

//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables independientes", style_console);

//Declaramos valores independientes relacioadas a un PRODUCTO
let Producto_Nombre = "Computadora Gammer Laptop 17\"";
let Producto_Marca = "AGUS";
let Producto_Modelo = "TUF 17";
let Producto_Precio = 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TUF707VV-HK22W");
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categoria = ["Electronicos","Computacion", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];

//Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca},  Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo},  Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio},  Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad ${Producto_Disponibilidad} ,  Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock},  Tipo de Dato <${typeof(Producto_Stock)}>
    Barcodde: ${Producto_Barcode},  Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categoria},  Tipo de Dato <${typeof(Producto_Categoria)}>`);
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresion anterior")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    //Ahora lo declaramos como un OBJETO
    console.log("%c2.- Objeto", style_console);
    let Producto =
    {
        Nombre : "Tenis deportivos",
        Marca : "Nike",
        Modelo: "Jordan 24",
        Precio : 3321.25,
        Disponibilidad: false,
        Stock: 0,
        SKU : "DZ5485-612",
        Imagen: "../asets/products/sneakers/JORDAN.png",
        Barcode : null,
        Categorias: ["Deportes", "Tenis", "Juvenil"]
    }

    //Ahora leemos el objeto completo
    console.table(Producto);

    //Para acceder a los propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer
    console.log("Accediendo a propiedades especificas del PRODUCTO")
    console.log(`Nombre Completo del PRODUCTO ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
    console.log(`Precio: ${Producto.Precio}`)
    if(Producto.Disponibilidad == 0)
    console.log(`Estatus: Agotado`)
    else
    console.log(`Estatus: Disponible`)

    console.log("%c3.- Destructores de Objetos", style_console);
    let Producto2 =
    {
        Clave : 316,
        Nombre : "Lentes para Sol",
        Marca : "Oarklev",
        Modelo: "QNTM Kato",
        Precio : 6829.00,
        Disponibilidad: true,
        Stock: 0,
        SKU : "OO9481D-0356",
        Imagen: "../asets/products/dunglasses/KatoRed.png",
        Barcode : 88832491626,
        Categorias: ["Deportes", "Tenis", "Juvenil"]
    }
    let Comprador = {
        Clave : 316,
        Nombre : "Daniela ",
        Apellidos : "Lopez Neri",
        Tipo : "Frecuente",
        Correo : "dl7996409@gmail.com",
        PaisOrigen :"Mexico",
        SaldoActual: 14000.00,
    }
    let Pedido = {
        Producto_Clave : 316,
        Comprador_Clve : 3216,
        Cantidad: 2,
        Estatus : "Carrito de compra"
    }
    //En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor
    let {Precio :Producto_Precio2}= Producto2;
    let {Cantidad : Pedido_Cantidad} = Pedido;
    let {SaldoActual: Cliente_SaldoActual} = Comprador;
    let Costo_Compra = Producto_Precio * Pedido_Cantidad;

    console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : ${(Costo_Compra)}`);
    if(Costo_Compra< Cliente_SaldoActual)
        console.log("El cliente tiene saldo suficiente.")
    


