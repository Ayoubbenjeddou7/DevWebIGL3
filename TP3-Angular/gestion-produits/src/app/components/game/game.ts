import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [FormsModule, CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  @Output() retourAccueilEvent = new EventEmitter<void>();

  questions = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Océan Pacifique', 'Océan Atlantique', 'Océan Indien', 'Océan Arctique'],
      reponse: 'Océan Pacifique',
      reponseUtilisateur: '',
    },
    {
      question: "Quelle est la capitale de l'Algérie ?",
      options: ['Alger', 'Tunis', 'Rabat', 'Le Caire'],
      reponse: 'Alger',
      reponseUtilisateur: '',
    },
    {
      question: 'Quelle est la couleur du ciel par temps clair ?',
      options: ['Bleu', 'Vert', 'Rouge', 'Jaune'],
      reponse: 'Bleu',
      reponseUtilisateur: '',
    },
    {
      question: 'Combien de continents y a-t-il sur Terre ?',
      options: ['5', '6', '7', '8'],
      reponse: '7',
      reponseUtilisateur: '',
    },
    {
      question: "Quel est l'animal le plus rapide du monde ?",
      options: ['Guépard', 'Faucon pèlerin', 'Gazelle', 'Lion'],
      reponse: 'Faucon pèlerin',
      reponseUtilisateur: '',
    },
  ];

  questionActuelle: number = 0;
  score: number = 0;
  quizTermine: boolean = false;

  selectionnerReponse(option: string): void {
    if (!this.quizTermine && this.questions[this.questionActuelle].reponseUtilisateur === '') {
      this.questions[this.questionActuelle].reponseUtilisateur = option;

      // Calculer le score immédiatement pour la question actuelle
      if (option === this.questions[this.questionActuelle].reponse) {
        this.score += 10;
      }
    }
  }

  questionSuivante(): void {
    if (this.questionActuelle < this.questions.length - 1) {
      this.questionActuelle++;
    } else {
      this.quizTermine = true;
    }
  }

  questionPrecedente(): void {
    if (this.questionActuelle > 0) {
      this.questionActuelle--;
    }
  }

  recommencerQuiz(): void {
    this.questionActuelle = 0;
    this.score = 0;
    this.quizTermine = false;
    this.questions.forEach((q) => (q.reponseUtilisateur = ''));
  }

  retourAccueil(): void {
    this.retourAccueilEvent.emit();
  }

  reponseEstCorrecte(index: number): boolean {
    return this.questions[index].reponseUtilisateur === this.questions[index].reponse;
  }

  getMessageScore(): string {
    const pourcentage = (this.score / (this.questions.length * 10)) * 100;
    if (pourcentage >= 80) return '🎉 Excellent ! Vous maîtrisez le sujet !';
    if (pourcentage >= 60) return '👍 Bon travail ! Continuez comme ça !';
    if (pourcentage >= 40) return '😊 Pas mal ! Quelques révisions et vous serez au top !';
    return '📚 Continuez à apprendre ! La pratique fait la perfection !';
  }
}
