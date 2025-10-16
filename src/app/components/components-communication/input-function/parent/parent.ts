import { Component } from '@angular/core';
import { Child } from '../old-input-way/child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent {
  public childValue = 42;
  public childName = 'Angular';
  public childIsActive = true;
}
