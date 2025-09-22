// ambito
const nombre = 'Mario';
// nombre = 'Luis';
let edad = 42;
const numeros = [1, 2, 3, 4];
const nombres = new Array();

const persona = {
    nombre: 'Laura',
    apellidos: 'García',
    asignaturas: ['matemáticas', 'inglés']
}

const persona2 = {
    name: 'Mary',
    address: 'Calle Malasaña'
}

persona.nombre = 'Sofía';

// Template Literals
const mensaje = `Mi nombre es ${nombre} 
y
edad ${edad}`;

console.log(mensaje);

// Destructuring

const [, , anim2] = ['pajaro', 'perro', 'leon'];
// const anim1 = animales[0]

const { modelo } = {
    marca: 'Fiat',
    modelo: 'Punto',
    color: 'rojo'
}

console.log(modelo);

// Arrow Functions

function sumar(a, b) {
    return a + b;
}

const restar = (a, b) => a - b;

// Clases
class Estudiante {

    #nombre;
    #apellidos;

    constructor(nombre, apellidos) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoValor) {
        this.#nombre = nuevoValor;
    }

}

const est = new Estudiante('Raúl', 'García');
console.log(est.nombre);

// Promise
fetch('https://peticiones.online/api/series')
    .then((result) => {
        return result.json()
    }).then((data) => {
        //console.log(data)
    })
    .catch((error) => {
        console.log(error);
    });

// async-await
async function loadData() {
    try {
        const result = await fetch('https://peticiones.online/api/series') // 404
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
loadData();

let direccion = 'Calle Falsa 1234';
direccion = 124;
direccion = true;
direccion = [1, 2, 3, 4];