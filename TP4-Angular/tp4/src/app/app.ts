import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Articles } from './components/articles/articles';
import { Etudiant } from './components/etudiant/etudiant';
import { Produits } from './components/produits/produits';
import { Taches } from './components/taches/taches';
import { Welcome } from './components/welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, Articles,Etudiant, Produits, Taches, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp4');
}
