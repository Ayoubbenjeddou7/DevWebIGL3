import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
interface Produit {
  nom: string;
  stock: number;
  prix: number;
}
@Component({
  selector: 'app-produits',
  imports: [FormsModule, CommonModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
   produits: Produit[] = [
    { nom: 'Laptop Gaming', stock: 15, prix: 1200 },
    { nom: 'Souris RGB', stock: 45, prix: 50 },
    { nom: 'Clavier Mécanique', stock: 8, prix: 80 },
    { nom: 'Écran 24"', stock: 25, prix: 200 },
    { nom: 'Casque Audio', stock: 60, prix: 100 }
  ];

  nouveauProduit: string = '';
  nouveauStock: number = 0;
  nouveauPrix: number = 0;

  getStockColor(stock: number): string {
    if (stock > 50) return '#27ae60'; // Vert
    if (stock >= 20 && stock <= 50) return '#f39c12'; // Orange
    return '#e74c3c'; // Rouge
  }

  getStockMessage(stock: number): string {
    if (stock > 50) return 'Stock élevé';
    if (stock >= 20 && stock <= 50) return 'Stock moyen';
    return 'Stock faible';
  }

  ajouterProduit(): void {
    if (this.nouveauProduit && this.nouveauStock >= 0 && this.nouveauPrix > 0) {
      this.produits.push({
        nom: this.nouveauProduit,
        stock: this.nouveauStock,
        prix: this.nouveauPrix
      });
      
      this.nouveauProduit = '';
      this.nouveauStock = 0;
      this.nouveauPrix = 0;
    }
  }

  augmenterStock(index: number): void {
    this.produits[index].stock += 10;
  }

  diminuerStock(index: number): void {
    if (this.produits[index].stock > 0) {
      this.produits[index].stock -= 10;
    }
  }
}
