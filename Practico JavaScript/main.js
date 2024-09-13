//Intro a JavaScript

// Ejercicio 2:
const a = 5;
const b = 10;
const c = a + b;

console.log(`La suma de a y b es: ${c}`);

// Ejercicio 3:
let nombre = prompt("¿Cuál es tu nombre?");
console.log(`Hola, ${nombre}!`);

// Operadores Lógicos y Condicionales.

// Ejercicio 1:
const aa = 10;
const bb = 23;
const cc = 18;
const mayor = Math.max(aa,bb,cc);

console.log(`El mayor de los tres números es: ${mayor}`);

// Ejercicio 2:
let numeroIngresado = prompt("Ingresa un número y te dire si es par o impar:");
if (numeroIngresado % 2 === 0) {
  console.log(`El número ${numeroIngresado} es par.`);
} else {
  console.log(`El número ${numeroIngresado} es impar.`);
}

// Operadores de Asignación y Bucles.

// Ejercicio 1:
let contador = 10;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

// Ejercicio 2
let numero;
do {
  numero = prompt("Ingresa un número mayor a 100:")
} while (numero <= 100);
console.log(`Intresaste un número mayor a 100: ${numero}`);

// Funciones de JavaScript

//Ejercicio 1:
function esPar (num) {
  if (num % 2 === 0) {
    console.log(`El número ${num} es par: true`);
} else {
    console.log(`El número ${num} es par: false`);
}
}

console.log(esPar(8));
console.log(esPar(7));

/* version mas completa:
function esPar(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log(`El número ${num} es par: true`);
    } else {
      console.log(`El número ${num} es impar: false`);
    }
  } else {
    return NaN;
  }
}

console.log(esPar(8));
console.log(esPar(7)); 
*/

// Ejercicio 2:
function convertirCelsiusAFahrenheit(C){
  let F = C*1.8 +32;
  console.log(`${C}ºC son equivalentes a: ${F}ºF`);
}

convertirCelsiusAFahrenheit(30);

// Objetos en JavaScript

// Ejercicio 1:
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Mendoza",
  cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};

console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
persona.cambiarCiudad("Barcelona");
console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

//Ejercicio 2:
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes Saavedra",
  anio: 1605,
  esAntiguo: function() {
    let anioActual = new Date().getFullYear();
    if (anioActual - this.anio > 10) {
      console.log(`El libro "${libro.titulo}" es antiguo: true`);
    }else {
      console.log(`El libro "${libro.titulo}" es antiguo: false`);
    }
  }
};

libro.esAntiguo();

// Arrays

// Ejercicio 1:
let numeros = [1,2,3,4,5,6,7,8,9,10];
let multiplicar = numeros.map(num => num * 2);

console.log("Números originales:", numeros);
console.log("Números multiplicados por 2:", multiplicar);

// Ejercicio 2:
let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    pares.push(i);
  }
}

console.log("Primeros 10 números pares: ", pares);

// Introducción al DOM

// Ejercicio 1:
function cambiarColor() {
  let parrafos = document.querySelectorAll("p");
  parrafos.forEach(p => {
    if (p.style.color === "blue") {
      p.style.color = ""; // Vuelve al color original
    } else {
      p.style.color = "blue"; // Cambia a azul
    }
  });
}

// Ejercicio 2:
const botonAlerta = document.getElementById('btnAlerta');
botonAlerta.addEventListener('click', function() {
  const textoIngresado = document.getElementById('texto').value;
  alert(`Has ingresado: ${textoIngresado}`);
});

// Eventos en DOM

// Ejercicio 1:
const elementosLista = document.querySelectorAll('#listaElementos li');
elementosLista.forEach((elemento) => {
  elemento.addEventListener('click', function() {
    console.log(this.textContent);
  });
});

// Ejercicio 2:
const campoTexto = document.getElementById('campoTexto');
const deshabilitar = document.getElementById('deshabilitar');
const habilitar = document.getElementById('habilitar')

deshabilitar.addEventListener('click', () => {
  campoTexto.disabled = true;
});

habilitar.addEventListener('click', () =>{
  campoTexto.disabled = false;
});

// LocalStorage

// Ejercicio 1:
document.addEventListener("DOMContentLoaded", function() {
  const guardarCorreo = document.getElementById('guardarCorreo');
  const correo = document.getElementById('correo');
  const mostrarCorreo = document.getElementById('mostrarCorreo');
  const correoGuardadoSpan = document.getElementById('correoGuardado');
  const eliminarCorreo = document.getElementById('eliminarCorreo');

  function mostrar () {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
      correoGuardadoSpan.textContent = correoGuardado;
      mostrarCorreo.classList.remove('hidden');
    }
  }

  guardarCorreo.addEventListener('submit', function(e) {
    e.preventDefault();
    const correoValue = correo.value;
    if (correoValue) {
      localStorage.setItem('correo', correoValue);
      mostrar();
    }
  });
  mostrar();

  eliminarCorreo.addEventListener('click', function() {
    localStorage.removeItem('correo');
    mostrarCorreo.classList.add('hidden');
  });
});