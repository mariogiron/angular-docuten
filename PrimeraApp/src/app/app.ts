import { Component, signal } from '@angular/core';
import { ProfileCard } from "./components/profile-card/profile-card";
import { Cronometro } from './components/cronometro/cronometro';
import { Galeria } from "./components/galeria/galeria";

@Component({
  selector: 'app-root',
  imports: [ProfileCard, Cronometro, Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrimeraApp');
}