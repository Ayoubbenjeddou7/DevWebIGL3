import { Component } from '@angular/core';
import { Student } from './TypeStudent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  imports: [FormsModule, CommonModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etudiant: Student = {
    id: 1,
    name: 'Ali',
    lastname: 'Ben Saleh',
    average: 15.5
  };
}
