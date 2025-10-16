import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child {
  value = input<number>(0);
  constructor() {
    effect(() => {
      console.log('Value changed:', this.value());
    });
  }
}
