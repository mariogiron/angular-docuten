import { Component, effect, model, output } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  num = model<number>(0, { alias: 'inicio' });
  $num = toObservable(this.num);

  multiplo5 = output<string>();

  modificaNum(incrementar: boolean) {
    this.num.update(value => {
      // if (incrementar) {
      //   return value + 1;
      // } else {
      //   return value - 1;
      // }
      return incrementar ? value + 1 : value - 1;
    });
  }

  constructor() {
    effect(() => {
      console.log('Valor num', this.num());
    });

    this.$num.subscribe((value) => {
      if (value % 5 === 0) {
        this.multiplo5.emit(`el valor del contador es ${value}`);
      }
    });
  }

}
