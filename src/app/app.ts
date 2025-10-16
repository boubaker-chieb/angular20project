import { Component, signal } from '@angular/core';
import { Post } from "./components/components-communication/blog-simple/post/post";

@Component({
  selector: 'app-root',
  imports: [Post],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular20Project');
}
