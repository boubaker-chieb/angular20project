import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
        Value: {{ value }}
    </p>
    <p>
        Name: {{ name }}
    </p>
    <p>
        Active: {{ isActive }}
    </p>
  `,
  styleUrl: './child.scss'
})
export class Child {
  @Input() value: number = 0;
  @Input() name: string = '';
  @Input() isActive: boolean = false;
}



