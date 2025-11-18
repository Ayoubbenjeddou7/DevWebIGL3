import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Article {
  titre: string;
  contenu: string;
  importance: string;
}

@Component({
  selector: 'app-articles',
  imports: [FormsModule, CommonModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles: Article[] = [
    { titre: 'Introduction à Angular', contenu: 'Les bases du framework Angular', importance: 'élevée' },
    { titre: 'Les Directives', contenu: 'Comprendre ngIf, ngFor, ngClass, ngStyle', importance: 'élevée' },
    { titre: 'Les Services', contenu: 'Création et utilisation des services', importance: 'moyenne' },
    { titre: 'Les Pipes', contenu: 'Transformation des données dans les templates', importance: 'faible' }
  ];

  newTitle: string = '';
  newContent: string = '';
  newImportance: string = 'moyenne';

  addArticle(): void {
    if (this.newTitle && this.newContent) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });
      
      // Réinitialisation
      this.newTitle = '';
      this.newContent = '';
      this.newImportance = 'moyenne';
    }
  }

  deleteArticle(index: number): void {
    this.articles.splice(index, 1);
  }
}
