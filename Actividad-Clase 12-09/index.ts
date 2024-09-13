// Ejercicio 1
class Coche {
    private marca : string;
    private modelo : string;
    private velocidad : number;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    acelerar(cantidad: number): void {
        this.velocidad += cantidad;
        console.log(`Acelerando... La velocidad actual es ${this.velocidad} km/h.`);
    }
    
    frenar(cantidad: number): void {
        this.velocidad -= cantidad;
        if (this.velocidad < 0) {
            this.velocidad = 0;
        }
        console.log(`Frenando... La velocidad actual es ${this.velocidad} km/h.`);
    }

    mostrarEstado(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h.`);
    }
}

const miCoche = new Coche('Toyota', 'Corolla');

miCoche.mostrarEstado();
miCoche.acelerar(50);
miCoche.frenar(20);
miCoche.mostrarEstado();            

// Ejercicio 2

interface Idata{
    id : number;
    completed : boolean;
}
async function peticion_ej2() {
    try {
        const peticion = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data : Idata [] = await peticion.json();
        data.filter((e) => e.completed);
        console.log("Tareas completadas:");
        console.log(data);
    } catch (error) {
        console.log(error)
        
    }
    
}

peticion_ej2();