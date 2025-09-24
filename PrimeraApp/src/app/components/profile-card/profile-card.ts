import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {

  mensaje: string = 'Este es el mensaje';
  cont: WritableSignal<number | undefined> = signal(0);

  constructor() {
    setTimeout(() => {
      // (value: number | undefined) => number | undefined

      this.mensaje = 'Cambio a otro';
    }, 3000);

    setInterval(() => {
      // Modificamos el valor del signal
      // this.cont.set(896);
      this.cont.update((value: number | undefined) => {
        return value! + 1;
      });

    }, 1000)
  }

  devolverNombre(): string {
    return 'Mario';
  }

  crearNumero(): number {
    return 32;
  }

}
