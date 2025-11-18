import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './etudiant-form.html',
  styleUrl: './etudiant-form.css',
})
export class EtudiantForm {
  // Les classes disponibles
  classes = ['IGL3', 'IDS3', 'ICE3', 'IEE3'];

  // Modèle initial
  model = new Etudiant(1, 'Ayoub', this.classes[0], 'GOATED');
  
  submitted = false;

  // Soumission du formulaire
  onSubmit() { 
    this.submitted = true; 
  }

  // Nouvel étudiant
  newEtudiant() {
    this.model = new Etudiant(42, '', '');
    this.submitted = false;
  }

  // Pour le débogage - à supprimer après
  get diagnostic() { 
    return JSON.stringify(this.model); 
  }
}
