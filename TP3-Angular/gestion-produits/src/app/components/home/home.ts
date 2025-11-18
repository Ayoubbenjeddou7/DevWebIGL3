import { Component } from '@angular/core';
import { Game } from '../game/game';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Game, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titre: string = 'Quiz Angular - Testez vos connaissances';
  quizCommence: boolean = false;
  
  commencerQuiz(): void {
    this.quizCommence = true;
    console.log('Quiz démarré !');
  }

  retourAccueil(): void {
    this.quizCommence = false;
    console.log('Retour à l\'accueil');
  }
}
