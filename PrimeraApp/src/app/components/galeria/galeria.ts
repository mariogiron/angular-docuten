import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {

  imagenes: string[] = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg'
  ]

  currImage: WritableSignal<number> = signal(0);

  ngOnInit() {
    // Definir qué hace el componente cuando se muestra por pantalla
    setInterval(() => {
      this.currImage.update(value => value + 1);
    }, 1000);
  }

}
