import { Component, signal } from '@angular/core';
import { Parent } from './components/components-communication/input-function/parent/parent';

@Component({
  selector: 'app-root',
  imports: [ Parent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular20Project');
}
