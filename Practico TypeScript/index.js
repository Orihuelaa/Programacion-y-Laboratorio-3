"use strict";
// Crear un proyecto
console.log("Ejercicio 2: corriendo desde typescript");
// Tipos de Datos
const texto = "Hola, TypeScript!";
const numero = 123;
const booleano = true;
const fecha = new Date(2024, 8, 8);
document.getElementById('practico').innerHTML = `
<h1>Tipos de Datos</h1>
<p>Texto: ${texto}</p>
<p>Número: ${numero}</p>
<p>Booleano: ${booleano}</p>
<p>Fecha: ${fecha.toLocaleDateString()}</p>
`;
// Número a cadena de texto:
function convertirNumACadena(num) {
    return num.toString();
}
document.getElementById('practico').innerHTML += `
<p>Número convertido a cadena: ${convertirNumACadena(456)}</p>
`;
// Suma Array:
const numeros = [5, 5, 3, 2];
function sumaArray(array) {
    return array.reduce((a, b) => a + b, 0);
}
document.getElementById('practico').innerHTML += `
<p>Suma del array: ${sumaArray(numeros)}</p>
`;
// Objeto estudiante:
const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemáticas"
};
document.getElementById('practico').innerHTML += `
<p> Estudiante: ${estudiante.nombre} </p>
<p> Edad: ${estudiante.edad}</p>
<p>Curso: ${estudiante.curso}</p>
`;
const direccion = {
    calle: "Av. Principal",
    ciudad: "Ciudad",
    codigoPostal: "12345"
};
document.getElementById('practico').innerHTML += `
<p>Dirección: ${direccion.calle}, Ciudad: ${direccion.ciudad}, CP: ${direccion.codigoPostal}</p>
`;
;
const usuario = {
    nombre2: "Ana",
    correo: "ana@gmail.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre2}`;
    }
};
document.getElementById('practico').innerHTML += `
<p>${usuario.saludar()}</p>
`;
// Clase Persona:
class Persona {
    constructor(nombre3, edad2) {
        this.nombre3 = nombre3;
        this.edad2 = edad2;
    }
    ;
    presentarse() {
        return `Hola, mi nombre es ${this.nombre3} y tengo ${this.edad2} años.`;
    }
    ;
}
const persona = new Persona("Carlos", 30);
document.getElementById('practico').innerHTML += `
<p> ${persona.presentarse()}</p>
`;
// Clase genérica Caja:
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    ;
    obtenerValor() {
        return this.valor;
    }
    ;
}
;
const cajaTexto = new Caja("Mensaje secreto");
const cajaNum = new Caja(42);
document.getElementById('practico').innerHTML += `
<p>Contenido de cajaDeTexto: ${cajaTexto.obtenerValor()}</p>
<p>Contenido de cajaDeNumero: ${cajaNum.obtenerValor()}</p>
`;
// Función genérica identidad:
function identidad(valor) {
    return valor;
}
document.getElementById('practico').innerHTML += `
<p>Identidad del número: ${identidad(123)}</p>
<p>Identidad del texto: ${identidad("texto")}</p>
`;
// Enumeración color
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Amarillo"] = "Amarillo";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
const colorFavorito = Color.Azul;
document.getElementById("practico").innerHTML += `
<p>Color favorito: ${colorFavorito}</p>
`;
