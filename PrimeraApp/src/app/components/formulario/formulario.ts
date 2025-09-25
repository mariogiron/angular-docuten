import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  onClick($event: Event) {
    const htmlButton = $event.target as HTMLButtonElement | null;
    console.log('Pulsado');
  }

  onInputChange($event: Event) {
    const htmlInput = $event.target as HTMLInputElement | null;
    console.log(htmlInput?.value);
  }

  onMouseEnter($event: Event) {
    ($event.target as HTMLInputElement).style.borderColor = 'red';
  }

}
