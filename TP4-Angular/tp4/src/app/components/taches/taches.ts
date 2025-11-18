import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Tache {
  description: string;
  completed: boolean;
  priorite: 'haute' | 'moyenne' | 'basse';
  dateCreation: Date;
}
@Component({
  selector: 'app-taches',
  imports: [FormsModule, CommonModule],
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
  taches: Tache[] = [
    { description: 'Apprendre les directives Angular', completed: true, priorite: 'haute', dateCreation: new Date('2024-01-15') },
    { description: 'Créer des composants réutilisables', completed: false, priorite: 'haute', dateCreation: new Date('2024-01-16') },
    { description: 'Comprendre les services', completed: false, priorite: 'moyenne', dateCreation: new Date('2024-01-17') },
    { description: 'Réviser TypeScript', completed: true, priorite: 'basse', dateCreation: new Date('2024-01-10') }
  ];

  nouvelleTache: string = '';
  nouvellePriorite: 'haute' | 'moyenne' | 'basse' = 'moyenne';
  filtre: 'toutes' | 'actives' | 'terminees' = 'toutes';

  get tachesFiltrees(): Tache[] {
    switch (this.filtre) {
      case 'actives':
        return this.taches.filter(t => !t.completed);
      case 'terminees':
        return this.taches.filter(t => t.completed);
      default:
        return this.taches;
    }
  }

  getNombreTachesActives(): number {
    return this.taches.filter(t => !t.completed).length;
  }

  ajouterTache(): void {
    if (this.nouvelleTache.trim()) {
      this.taches.push({
        description: this.nouvelleTache,
        completed: false,
        priorite: this.nouvellePriorite,
        dateCreation: new Date()
      });
      this.nouvelleTache = '';
      this.nouvellePriorite = 'moyenne';
    }
  }

  basculerStatut(tache: Tache): void {
    tache.completed = !tache.completed;
  }

  supprimerTache(index: number): void {
    this.taches.splice(index, 1);
  }

  getCouleurPriorite(priorite: string): string {
    switch (priorite) {
      case 'haute': return '#e74c3c';
      case 'moyenne': return '#f39c12';
      case 'basse': return '#27ae60';
      default: return '#95a5a6';
    }
  }

  getIconePriorite(priorite: string): string {
    switch (priorite) {
      case 'haute': return '🔥';
      case 'moyenne': return '⚠️';
      case 'basse': return '💚';
      default: return '📝';
    }
  }
}
