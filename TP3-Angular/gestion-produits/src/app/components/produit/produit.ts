import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-produit',
  imports: [FormsModule,CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  
  
  imageUrl: string = 'assets/images/produit.jpg';
  enStock: boolean = true;
  prix: number = 299.99;

  toggleStock(): void {
    this.enStock = !this.enStock;
  }

  afficherAlerte(): void {
    alert('Produit ajouté au panier');
  }
  @Input() nomProduit: string = 'Produit Exemple';
  @Output() ajouterAuPanier = new EventEmitter<string>();

  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
    this.afficherAlerte();
  }
}
