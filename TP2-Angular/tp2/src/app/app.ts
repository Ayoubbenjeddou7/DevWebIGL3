import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Profil } from './profil/profil';
import { Utilisateur } from './utilisateur/utilisateur';
import { Adresse } from './adresse/adresse';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Utilisateur, Profil, Adresse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp2');
}
