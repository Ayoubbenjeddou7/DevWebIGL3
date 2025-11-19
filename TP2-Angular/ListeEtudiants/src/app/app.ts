import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from './etudiant/etudiant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'MyClass Will be Angular Heroes';
  myname = 'Ali Ben Saleh';
}
