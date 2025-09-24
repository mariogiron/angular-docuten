import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.html',
  styleUrl: './cronometro.css'
})
export class Cronometro {

  numero: WritableSignal<number> = signal(0);
  div: WritableSignal<string> = signal('divCronometro');

}
