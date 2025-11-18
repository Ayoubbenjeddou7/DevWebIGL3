import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule, CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  isLoggedIn: boolean = false;
  username: string = '';
  loginMessage: string = '';

  toggleLogin(): void {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      this.username = '';
      this.loginMessage = '';
    } else {
      // Validation: le nom doit être "VotrePrénom"
      if (this.username === 'Ayoub') {
        this.isLoggedIn = true;
        this.loginMessage = 'Connexion réussie !';
      } else {
        this.loginMessage = 'Nom incorrect. Utilisez "Ayoub"';
      }
    }
  }

  onUsernameChange(event: any): void {
    this.username = event.target.value;
  }
}
