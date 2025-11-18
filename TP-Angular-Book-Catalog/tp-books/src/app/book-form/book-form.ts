import { Component, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h4>{{ book() ? '✏️ Modifier le livre' : '➕ Ajouter un livre' }}</h4>
      </div>
      <div class="card-body">
        <form #bookForm="ngForm" (ngSubmit)="onSubmit(bookForm)" novalidate>
          
          <!-- Titre -->
          <div class="mb-3">
            <label for="title" class="form-label">Titre *</label>
            <input 
              type="text" 
              class="form-control" 
              id="title"
              name="title"
              [(ngModel)]="formData.title"
              required
              minlength="3"
              #title="ngModel">
            
            @if (title.invalid && title.dirty) {
              <div class="text-danger small">
                @if (title.errors?.['required']) {
                  <div>❌ Le titre est obligatoire</div>
                }
                @if (title.errors?.['minlength']) {
                  <div>❌ Le titre doit faire au moins 3 caractères</div>
                }
                @if (isTitleOnlyNumbers()) {
                  <div>❌ Le titre ne peut pas être composé uniquement de chiffres</div>
                }
              </div>
            }
          </div>

          <!-- Auteur -->
          <div class="mb-3">
            <label for="author" class="form-label">Auteur *</label>
            <input 
              type="text" 
              class="form-control" 
              id="author"
              name="author"
              [(ngModel)]="formData.author"
              required
              minlength="3"
              #author="ngModel">
            
            @if (author.invalid && author.dirty) {
              <div class="text-danger small">
                @if (author.errors?.['required']) {
                  <div>❌ L'auteur est obligatoire</div>
                }
                @if (author.errors?.['minlength']) {
                  <div>❌ L'auteur doit faire au moins 3 caractères</div>
                }
              </div>
            }
          </div>

          <!-- Email éditeur -->
          <div class="mb-3">
            <label for="publisherEmail" class="form-label">Email de l'éditeur *</label>
            <input 
              type="email" 
              class="form-control" 
              id="publisherEmail"
              name="publisherEmail"
              [(ngModel)]="formData.publisherEmail"
              required
              email
              #publisherEmail="ngModel">
            
            @if (publisherEmail.invalid && publisherEmail.dirty) {
              <div class="text-danger small">
                @if (publisherEmail.errors?.['required']) {
                  <div>❌ L'email est obligatoire</div>
                }
                @if (publisherEmail.errors?.['email']) {
                  <div>❌ Format d'email invalide</div>
                }
              </div>
            }
          </div>

          <!-- Téléphone éditeur -->
          <div class="mb-3">
            <label for="publisherPhone" class="form-label">Téléphone éditeur</label>
            <input 
              type="tel" 
              class="form-control" 
              id="publisherPhone"
              name="publisherPhone"
              [(ngModel)]="formData.publisherPhone"
              pattern="^[0-9]{8}$"
              #publisherPhone="ngModel"
              placeholder="8 chiffres">
            
            @if (publisherPhone.invalid && publisherPhone.dirty) {
              <div class="text-danger small">
                ❌ Le téléphone doit contenir exactement 8 chiffres
              </div>
            }
          </div>

          <!-- Date de publication -->
          <div class="mb-3">
            <label for="releaseDate" class="form-label">Date de publication *</label>
            <input 
              type="date" 
              class="form-control" 
              id="releaseDate"
              name="releaseDate"
              [(ngModel)]="formData.releaseDate"
              required
              #releaseDate="ngModel">
            
            @if (releaseDate.invalid && releaseDate.dirty) {
              <div class="text-danger small">
                ❌ La date de publication est obligatoire
              </div>
            }
            @if (formData.releaseDate && isDateBefore1900()) {
              <div class="text-danger small">
                ❌ La date doit être après 1900
              </div>
            }
          </div>

          <!-- Catégorie -->
          <div class="mb-3">
            <label for="category" class="form-label">Catégorie *</label>
            <select 
              class="form-control" 
              id="category"
              name="category"
              [(ngModel)]="formData.category"
              required
              #category="ngModel">
              <option value="">Choisir une catégorie</option>
              <option value="Roman">Roman</option>
              <option value="Science">Science</option>
              <option value="Histoire">Histoire</option>
              <option value="Informatique">Informatique</option>
              <option value="Art">Art</option>
              <option value="Autres">Autres</option>
            </select>
            
            @if (category.invalid && category.dirty) {
              <div class="text-danger small">
                ❌ La catégorie est obligatoire
              </div>
            }
          </div>

          <!-- Disponibilité -->
          <div class="mb-3 form-check">
            <input 
              type="checkbox" 
              class="form-check-input" 
              id="isAvailable"
              name="isAvailable"
              [(ngModel)]="formData.isAvailable">
            <label class="form-check-label" for="isAvailable">
              Disponible à la vente
            </label>
          </div>

          <!-- Stock -->
          <div class="mb-3">
            <label for="stock" class="form-label">Stock</label>
            <input 
              type="number" 
              class="form-control" 
              id="stock"
              name="stock"
              [(ngModel)]="formData.stock"
              min="0"
              #stock="ngModel">
            
            @if (stock.invalid && stock.dirty) {
              <div class="text-danger small">
                ❌ Le stock ne peut pas être négatif
              </div>
            }
          </div>

          <!-- Boutons -->
          <div class="d-flex gap-2">
            <button 
              type="submit" 
              class="btn btn-success"
              [disabled]="!isFormValid()">
              {{ book() ? '💾 Mettre à jour' : '➕ Ajouter' }}
            </button>
            
            @if (book()) {
              <button 
                type="button" 
                class="btn btn-secondary"
                (click)="onCancel()">
                ❌ Annuler
              </button>
            }
            
            <button 
              type="button" 
              class="btn btn-outline-secondary"
              (click)="resetForm(bookForm)">
              🔄 Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .ng-invalid.ng-dirty {
      border-left: 5px solid #dc3545 !important;
    }
    
    .ng-valid.ng-dirty {
      border-left: 5px solid #28a745 !important;
    }
    
    .form-control {
      border-left: 5px solid #6c757d;
    }
  `]
})
export class BookForm {
  // Input pour recevoir le livre à éditer
  book = input<Book | null>(null);
  
  // Output pour émettre les données du formulaire
  bookSubmit = output<Omit<Book, 'id'>>();
  cancelEdit = output<void>();

  // Données du formulaire
  formData: Omit<Book, 'id'> = this.getEmptyForm();

  // Surveiller les changements du livre à éditer
  ngOnInit() {
    if (this.book()) {
      this.formData = { ...this.book()! };
    }
  }

  // Soumission du formulaire
  onSubmit(form: NgForm) {
    if (this.isFormValid()) {
      this.bookSubmit.emit(this.formData);
      this.resetForm(form);
    }
  }

  // Annulation de l'édition
  onCancel() {
    this.cancelEdit.emit();
    this.formData = this.getEmptyForm();
  }

  // Réinitialisation du formulaire
  resetForm(form: NgForm) {
    form.resetForm();
    this.formData = this.getEmptyForm();
  }

  // Validation personnalisée - titre pas que des chiffres
  isTitleOnlyNumbers(): boolean {
    return /^\d+$/.test(this.formData.title || '');
  }

  // Validation date après 1900
  isDateBefore1900(): boolean {
    if (!this.formData.releaseDate) return false;
    const date = new Date(this.formData.releaseDate);
    return date.getFullYear() < 1900;
  }

  // Validation globale du formulaire
  isFormValid(): boolean {
    const hasRequiredFields = 
      this.formData.title && 
      this.formData.author && 
      this.formData.publisherEmail && 
      this.formData.releaseDate && 
      this.formData.category;
    
    const hasMinLength = 
      (this.formData.title?.length || 0) >= 3 && 
      (this.formData.author?.length || 0) >= 3;
    
    const isValidEmail = 
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.publisherEmail || '');
    
    const isTitleValid = !this.isTitleOnlyNumbers();
    const isDateValid = !this.isDateBefore1900();
    
    return !!(hasRequiredFields && hasMinLength && isValidEmail && isTitleValid && isDateValid);
  }

  // Données vides pour le formulaire
  private getEmptyForm(): Omit<Book, 'id'> {
    return {
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: true,
      stock: 0
    };
  }
}