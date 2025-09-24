# Resumen Conceptos

- Crear apps

```bash
ng new NombreApp
```

- Crear componentes

```ts
ng generate component components/NombreComponente --skip-tests
ng g c components/NombreComponente --skip-tests
// app.ts app.html
```

- Decorador @Component
    - selector
    - imports 
    - template y style

- Propiedades en el componente
    - Interpolación ({{ }})
        - propiedades básicas
        - signals
            - métodos set y update
            - computed signals
            - effects
            - input / output

- Property Binding
    - [id]="valor JS/TS"