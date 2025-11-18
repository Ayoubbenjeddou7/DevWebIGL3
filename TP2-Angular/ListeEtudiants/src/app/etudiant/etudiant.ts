import { Component } from '@angular/core';
import { Student } from './Typestudent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
etudiant: Student = {
    id: 1,
    name: 'Ali',
    lastname: 'Ben Saleh',
    classe: '3ème TI',
    average: 0.85,
    birthdate: new Date('2000-05-15')
  };
}
