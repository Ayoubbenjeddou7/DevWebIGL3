import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [FormsModule, CommonModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  utilisateur = {
    prenom: '',
    age: ''
  };
}
