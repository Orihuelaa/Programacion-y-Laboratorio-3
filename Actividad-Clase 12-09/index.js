"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Ejercicio 1
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    acelerar(cantidad) {
        this.velocidad += cantidad;
        console.log(`Acelerando... La velocidad actual es ${this.velocidad} km/h.`);
    }
    frenar(cantidad) {
        this.velocidad -= cantidad;
        if (this.velocidad < 0) {
            this.velocidad = 0;
        }
        console.log(`Frenando... La velocidad actual es ${this.velocidad} km/h.`);
    }
    mostrarEstado() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h.`);
    }
}
const miCoche = new Coche('Toyota', 'Corolla');
miCoche.mostrarEstado();
miCoche.acelerar(50);
miCoche.frenar(20);
miCoche.mostrarEstado();
function peticion_ej2() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const peticion = yield fetch("https://jsonplaceholder.typicode.com/todos");
            const data = yield peticion.json();
            data.filter((e) => e.completed);
            console.log("Tareas completadas:");
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
peticion_ej2();
