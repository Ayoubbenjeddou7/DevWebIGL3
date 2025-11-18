import { Component } from '@angular/core';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.html',
  styleUrls: ['./adresse.css']
})
export class Adresse{
  rue = '123 Rue Mongi Slim';
  ville = 'Tunis';
  codePostal = '1000';
}