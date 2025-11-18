import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EtudiantForm } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule,EtudiantForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TPForm');
}
