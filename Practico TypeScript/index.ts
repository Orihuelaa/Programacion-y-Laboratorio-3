// Crear un proyecto
console.log("Ejercicio 2: corriendo desde typescript");

// Tipos de Datos
const texto: string = "Hola, TypeScript!";
const numero: number = 123;
const booleano: boolean = true;
const fecha: Date = new Date(2024, 8, 8);

document.getElementById('practico')!.innerHTML = `
<h1>Tipos de Datos</h1>
<p>Texto: ${texto}</p>
<p>Número: ${numero}</p>
<p>Booleano: ${booleano}</p>
<p>Fecha: ${fecha.toLocaleDateString()}</p>
`;

// Número a cadena de texto:
function convertirNumACadena(num: number) : string {
    return num.toString();
}

document.getElementById('practico')!.innerHTML += `
<p>Número convertido a cadena: ${convertirNumACadena(456)}</p>
`;

// Suma Array:
const numeros: number[] = [5, 5, 3, 2];
function sumaArray(array: number[]): number {
    return array.reduce((a,b) => a + b, 0);
}

document.getElementById('practico')!.innerHTML += `
<p>Suma del array: ${sumaArray(numeros)}</p>
`;

// Objeto estudiante:
const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso:"Matemáticas"
};

document.getElementById('practico')!.innerHTML += `
<p> Estudiante: ${estudiante.nombre} </p>
<p> Edad: ${estudiante.edad}</p>
<p>Curso: ${estudiante.curso}</p>
`;

// Type personalizado:
type Direccion = {
    calle: string,
    ciudad: string,
    codigoPostal: string;
};

const direccion: Direccion = {
    calle: "Av. Principal",
    ciudad: "Ciudad",
    codigoPostal: "12345"
};

document.getElementById('practico')!.innerHTML += `
<p>Dirección: ${direccion.calle}, Ciudad: ${direccion.ciudad}, CP: ${direccion.codigoPostal}</p>
`;

// Interfas para usuario:
interface Usuario {
    nombre2: string;
    correo: string;
    saludar(): string;
};

const usuario: Usuario = {
    nombre2: "Ana",
    correo: "ana@gmail.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre2}`;
    }
};

document.getElementById('practico')!.innerHTML += `
<p>${usuario.saludar()}</p>
`;

// Clase Persona:
class Persona {
    nombre3: string;
    edad2: number;

    constructor(nombre3: string, edad2: number) {
        this.nombre3 = nombre3;
        this.edad2 = edad2;
    };

    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre3} y tengo ${this.edad2} años.`;
    };
}

const persona = new Persona("Carlos", 30);

document.getElementById('practico')!.innerHTML += `
<p> ${persona.presentarse()}</p>
`;

// Clase genérica Caja:
class Caja<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    };
    obtenerValor(): T {
        return this.valor;
    };
};

const cajaTexto = new Caja<string>("Mensaje secreto");
const cajaNum = new Caja<number>(42);

document.getElementById('practico')!.innerHTML += `
<p>Contenido de cajaDeTexto: ${cajaTexto.obtenerValor()}</p>
<p>Contenido de cajaDeNumero: ${cajaNum.obtenerValor()}</p>
`;

// Función genérica identidad:
function identidad<T>(valor: T): T {
    return valor;
}

document.getElementById('practico')!.innerHTML += `
<p>Identidad del número: ${identidad(123)}</p>
<p>Identidad del texto: ${identidad("texto")}</p>
`;

// Enumeración color
enum Color {
    Rojo = "Rojo",
    Amarillo = "Amarillo",
    Azul = "Azul"
}

const colorFavorito: Color = Color.Azul;

document.getElementById("practico")!.innerHTML += `
<p>Color favorito: ${colorFavorito}</p>
`;