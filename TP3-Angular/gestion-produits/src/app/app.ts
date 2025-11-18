import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './components/bienvenue/bienvenue';
import { Produit } from './components/produit/produit';
import { Game } from './components/game/game';
import { Home } from './components/home/home';
import { Panier } from './components/panier/panier';
import { Question } from './components/question/question';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { Score } from './components/score/score';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule, Bienvenue, Produit, Game, Home, Panier, Question, Utilisateur, Score],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'gestion-produits';
  panierItems: string[] = [];

  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier.`);
  }
}
