import { Component, input, Input, InputSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.html',
  styleUrl: './cronometro.css'
})
export class Cronometro {

  // Atributo del componente cronómetro
  // @Input() inicio: number = 10;
  inicio: InputSignal<number> = input.required({
    alias: 'start',
    transform: (value: number) => value * 5
  });

  numero: WritableSignal<number> = signal(0);
  div: WritableSignal<string> = signal('divCronometro');

  ngOnInit() {
    // this.inicio.update(34);
  }

}
