# Ejercicio 

- Componente Contador

```
ng generate component components/Contador --skip-tests

<app-contador [inicio]="20"></app-contador>
```

- Muestre un número y que podamos modificar ese número a partir de un botón incrementar y un botón decrementar
    - ¿Propiedades o signals para el valor del número a modificar?
    - ¿Cómo capturo los eventos de los diferentes botones?
    - ¿Cómo le puedo pasar un INPUT desde el padre para poder modificar el valor inicial?

- Variables CSS

# Ejercicio Tareas Simple

```html
<app-formulario (tareaCreada)=""></app-formulario>
<app-lista-tareas [tareas]="ARRAY CON TAREAS"></app-lista-tareas>
```

## Lista de tareas

- Recibe un array con las tareas -> input
- Muestra dichas tareas
    - Se puede mostrar ejecutando una función -> Transformar el array a string
    - Investigar control-flow

## Formulario

- Recuperar el valor del campo de texto y enviarlo al padre -> output
- Emito el valor del campo de texto cuando pulse el botón -> evento click