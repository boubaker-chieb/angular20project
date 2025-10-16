import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [
    Child
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent {
  public childValue = 0;

  incrementValue() {
    this.childValue++;
  }
}
