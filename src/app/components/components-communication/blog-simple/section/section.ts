import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.scss'
})
export class Section {
  @Input()
  public title!: string;
  @Input()
  public description!: string;
}
