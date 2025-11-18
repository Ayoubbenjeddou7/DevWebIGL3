import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookContainer } from './book-container/book-container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookContainer],
  template: `
    <div class="app-container">
      <h1 class="text-center mb-4">📚 Catalogue de Livres</h1>
      <app-book-container></app-book-container>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class App {
  protected readonly title = signal('tp-books');
}
