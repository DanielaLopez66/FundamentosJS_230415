// Repaso de objetos 

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)"; 
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

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
        Nombre : "Ana Daniela ",
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
        Estatus : "Carrito de compra",
        TipoPago: "Tarjeta de credito"
    }
    //En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor
    let {Precio :Producto_Precio2}= Producto2;
    let {Cantidad : Pedido_Cantidad} = Pedido;
    let {SaldoActual: Cliente_SaldoActual} = Comprador;
    let Costo_Compra = Producto_Precio * Pedido_Cantidad;

    console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : ${(Costo_Compra)}`);
    if(Costo_Compra< Cliente_SaldoActual)
        console.log("El cliente tiene saldo suficiente.")

    // Actualizar el valor de los objetos
    console.log(`%c4.-Actualización de los valores de las propiedades de un Objeto`, style_console);
    console.log(`El objeto actualmente tiene los isguientes valores`)
    console.log(JSON.stringify(Producto2, null, 2));
    // Convierte el objeto a una cadena para evitar problemas con la referencia
    console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,925.50`)

    // Para podificar el valor de  un objeto basta con igualar el nuevo valor de la propiedad deseada 
    Producto2.Precio=6915.50;
    console.log(`Los nuevos valores del producto son: `)
    console.log(Producto2);

    //¿Puedo cambiar no solo el valor si no el tipo de dato de un Objeto en JavaScript?
    console.log(`--------------------`)
    console.log(`El objeto actualmente tiene los siguientes valores`)
    var tipoDisponibilidad = typeof(Producto.Disponibilidad)
    console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
    console.log(JSON.stringify(Producto2,null, 2));
    Producto2.Disponibilidad="Si";
    let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
    console.log(Producto2);
    console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

    //Agregar nuevas propiedades al objeto
    console.log("%c5.- Agregar nuevas propiedades al objeto", style_console);
    //Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto.
    Comprador[`Direccion`]= "AV. Benito Juarez No.1525, Interior 4D, Xicotepec de Juarez, Puebla, Mexico"
    Comprador[`Tipo`]="Nuevo cliente"
    Comprador[`ActividadesReciente`]=true
    Comprador[`TotalCompras`]=3516.25
    console.log(`Despues de haber agregado las propiedades Direccion, Tipo, ActividadesReciente y TotalCompras...`)
    console.table(Comprador)

    //Eliminar propiedades existentes de un objeto
    console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);
    console.log("La estructura y valores del objeto PEDIDO son previos a la modificacion: ")
    console.table(Pedido)
    console.log("Despues de la modificacion ...")
    console.table(Pedido)

    


