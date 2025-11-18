import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panier',
  imports: [FormsModule, CommonModule],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  @Input() items: string[] = [];
  commander(): void {
    if (this.items.length > 0) {
      alert(`Commande passée avec ${this.items.length} articles !`);
      console.log('Articles commandés:', this.items);
    } else {
      alert('Votre panier est vide !');
    }
  }
}
