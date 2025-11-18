import { Component } from '@angular/core';
import { Students, Student } from './TypeStudent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  imports: [FormsModule, CommonModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etuds = Students;
  selectedEtudiant!: Student;
  searchTerm: string = '';

  onSelect(etudiant: Student): void {
    this.selectedEtudiant = etudiant;
  }

  get filteredEtudiants(): Student[] {
    if (!this.searchTerm) {
      return this.etuds;
    }
    return this.etuds.filter(etudiant =>
      etudiant.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      etudiant.classe?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getMoyenne(notes: number[] | undefined): number {
    if (!notes || notes.length === 0) return 0;
    return notes.reduce((a, b) => a + b, 0) / notes.length;
  }

  getMoyenneColor(moyenne: number): string {
    if (moyenne >= 16) return '#27ae60';
    if (moyenne >= 12) return '#f39c12';
    return '#e74c3c';
  }
}
