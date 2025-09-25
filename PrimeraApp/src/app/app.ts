import { Component, signal } from '@angular/core';
import { ProfileCard } from "./components/profile-card/profile-card";
import { Cronometro } from './components/cronometro/cronometro';
import { Galeria } from "./components/galeria/galeria";
import { Formulario } from "./components/formulario/formulario";
import { Contador } from "./components/contador/contador";

@Component({
  selector: 'app-root',
  imports: [ProfileCard, Cronometro, Galeria, Formulario, Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  onMultiplo5($event: string) {
    console.log('Multiplo 5', $event);
  }

}