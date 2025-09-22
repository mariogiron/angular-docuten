// tipos

let cadena: string = 'hola mundo';
// cadena = 4;
console.log(cadena);

let edad: boolean = true;

let animal: any = 'perro';
animal = 3;
animal = [true, false];

// Clases
class Estudiante {

    private nombre: string;
    private apellidos: string;

    constructor(nombre: string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

}

const est = new Estudiante('Ana', 'López');

// Types y Interfaces

type NumberOrUndefined = number | undefined;
type Estado = 'pending' | 'resolve' | 'reject';

const isActive: Estado = 'resolve';

let contador: NumberOrUndefined = 0;
contador = undefined;

interface Empleado {
    nombre: string;
    telefono: string;
    email: string;
    activo: boolean;
    direccion?: string;
}

const emp1: Empleado = {
    nombre: 'Luis',
    telefono: '89018921',
    email: 'prueba@gmail.com',
    activo: true
}

const arr: Empleado[] = [
    emp1
]

// Funciones tipadas
const sumar = (a: number, b: number): number => {
    return a + b;
}
