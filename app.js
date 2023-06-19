/** 
 * -Objetivos de la aplicacion
 * -Estructura HTML
 * -Funciones
 * -Objetos
 * -Arrays
 * -Y algun metodo de array
 * -push: para agregar el array
 * -splice: para quitar el array
 * -find: para buscar un elemento 
 * -indexOf: para encontrar el indice de un elemento
 **/




// Clase molde para los items del juego

class Item{
    // Parametros para crear el item del juego con su nombre y su precio
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

//Variables Globales

// El const inventario es un Array donde guardamos todos los items comprados, aqui solo lo declaramos
const inventario = [];

//Aca creamos los objetos llamados ITEMS que va a tener el vendedor disponible 

const comida = new Item("Comida", 80, "comida.png");
const espada = new Item("Espada", 160, "espada.png");
const artilugio= new Item("Artilugio", 200, "artilugio.png");

// Varible global del oro
let oro = 1000;

//Elementos 
const elementoOro = document.querySelector("#oro");
const elementoInventario = document.querySelector("#inventario")
elementoOro.innerText = oro;

//Funciones 
function comprar(Item) {
    if (oro - Item.precio <= 0){
        alert("No tenes suficiente oro para comprar el item " + Item.nombre);
    } else {
    inventario.push(Item)
    oro = oro - Item.precio;
    actualizarHTML();
    }
}

function vender(indice) {
    const Item = inventario[indice];
    oro = oro + Item.precio;
    inventario.splice(indice, 1);
    actualizarHTML();
}

// Se va a encargar de renderizar todos los items del inventario
function actualizarHTML(){
    elementoInventario.innerHTML = "";
    for (const Item of inventario){
        let indiceItem = inventario.indexOf(Item);
        let elementoItem = `
        <li class="Item" onclick="vender(${indiceItem})"> 
           <img src="img/${Item.imagen}"/> 
        </li>`;
        elementoInventario.innerHTML += elementoItem;
    }
    elementoOro.innerText = oro;
}