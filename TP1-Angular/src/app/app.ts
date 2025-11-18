import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'angular-evaluation';
  showAnswers = false;
  
  // Réponses correctes
  answers = [
    'a', // Q1
    'c', // Q2
    'b', // Q3
    'b', // Q4
    'c', // Q5
    'b', // Q6
    'a', // Q7
    'b', // Q8
    'b', // Q9
    'c', // Q10
    'a'  // Q11
  ];

  toggleAnswer(questionNumber: number) {
    // Implémentez la logique pour gérer les réponses individuelles si nécessaire
    console.log('Question clicked:', questionNumber);
  }

  toggleAllAnswers() {
    this.showAnswers = !this.showAnswers;
  }
}