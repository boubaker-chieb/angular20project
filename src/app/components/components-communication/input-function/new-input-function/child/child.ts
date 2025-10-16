import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
        Value: {{ value() }}
    </p>
    <p>
        Name: {{ name() }}
    </p>
    <p>
        Active: {{ isActive() }}
    </p>
  `,
  styleUrl: './child.scss'
})
export class Child {
  value = input<number>(0);
  name = input<string>();
  isActive = input<boolean>(false);
}


