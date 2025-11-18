import { Component, input, output, signal } from '@angular/core';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  template: `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h4>📖 Liste des Livres</h4>
        <span class="badge bg-primary">Total: {{ totalBooks() }}</span>
      </div>
      
      <div class="card-body">
        <!-- Barre de recherche et filtres -->
        <div class="row mb-3">
          <div class="col-md-6">
            <input 
              type="text" 
              class="form-control" 
              placeholder="🔍 Rechercher un livre..."
              [value]="searchTerm()"
              (input)="onSearch($event)">
          </div>
          <div class="col-md-3">
            <select class="form-control" (change)="onCategoryFilter($event)">
              <option value="">Toutes les catégories</option>
              <option value="Roman">Roman</option>
              <option value="Science">Science</option>
              <option value="Histoire">Histoire</option>
              <option value="Informatique">Informatique</option>
              <option value="Art">Art</option>
              <option value="Autres">Autres</option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-control" (change)="onAvailabilityFilter($event)">
              <option value="">Tous</option>
              <option value="available">Disponibles</option>
              <option value="unavailable">Non disponibles</option>
            </select>
          </div>
        </div>

        <!-- Tableau des livres -->
        @if (filteredBooks().length === 0) {
          <div class="text-center text-muted py-4">
            <p>📭 Aucun livre trouvé</p>
          </div>
        } @else {
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead class="table-dark">
                <tr>
                  <th>Titre</th>
                  <th>Auteur</th>
                  <th>Catégorie</th>
                  <th>Disponible</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (book of filteredBooks(); track book.id) {
                  <tr>
                    <td>
                      <strong>{{ book.title }}</strong>
                      @if (book.releaseDate) {
                        <br>
                        <small class="text-muted">
                          📅 {{ book.releaseDate | date:'dd/MM/yyyy' }}
                        </small>
                      }
                    </td>
                    <td>{{ book.author }}</td>
                    <td>
                      <span class="badge" [ngClass]="getCategoryBadgeClass(book.category)">
                        {{ book.category }}
                      </span>
                    </td>
                    <td>
                      @if (book.isAvailable) {
                        <span class="badge bg-success">✅ Disponible</span>
                      } @else {
                        <span class="badge bg-danger">❌ Indisponible</span>
                      }
                    </td>
                    <td>
                      @if (book.stock !== undefined) {
                        <span [class.text-warning]="book.stock < 5" 
                              [class.text-success]="book.stock >= 5">
                          {{ book.stock }} unité(s)
                        </span>
                      } @else {
                        <span class="text-muted">-</span>
                      }
                    </td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button 
                          class="btn btn-outline-primary"
                          (click)="onEdit(book)"
                          title="Modifier">
                          ✏️
                        </button>
                        <button 
                          class="btn btn-outline-danger"
                          (click)="onDelete(book.id)"
                          title="Supprimer">
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  `
})
export class BookList {
  // Inputs
  books = input<Book[]>([]);
  totalBooks = input<number>(0);
  
  // Outputs
  editBook = output<Book>();
  deleteBook = output<number>();

  // Signaux pour les filtres
  searchTerm = signal<string>('');
  categoryFilter = signal<string>('');
  availabilityFilter = signal<string>('');

  // Livres filtrés
  filteredBooks = signal<Book[]>([]);

  // Mettre à jour les livres filtrés quand les inputs changent
  ngOnChanges() {
    this.updateFilteredBooks();
  }

  // Recherche
  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value.toLowerCase());
    this.updateFilteredBooks();
  }

  // Filtre par catégorie
  onCategoryFilter(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.categoryFilter.set(target.value);
    this.updateFilteredBooks();
  }

  // Filtre par disponibilité
  onAvailabilityFilter(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.availabilityFilter.set(target.value);
    this.updateFilteredBooks();
  }

  // Mettre à jour la liste filtrée
  private updateFilteredBooks() {
    let filtered = this.books();
    
    // Filtre par recherche
    if (this.searchTerm()) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(this.searchTerm()) ||
        book.author.toLowerCase().includes(this.searchTerm())
      );
    }
    
    // Filtre par catégorie
    if (this.categoryFilter()) {
      filtered = filtered.filter(book => book.category === this.categoryFilter());
    }
    
    // Filtre par disponibilité
    if (this.availabilityFilter() === 'available') {
      filtered = filtered.filter(book => book.isAvailable);
    } else if (this.availabilityFilter() === 'unavailable') {
      filtered = filtered.filter(book => !book.isAvailable);
    }
    
    this.filteredBooks.set(filtered);
  }

  // Édition d'un livre
  onEdit(book: Book) {
    this.editBook.emit(book);
  }

  // Suppression d'un livre
  onDelete(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.deleteBook.emit(id);
    }
  }

  // Classe CSS pour les badges de catégorie
  getCategoryBadgeClass(category: string): string {
    const classes: { [key: string]: string } = {
      'Roman': 'bg-primary',
      'Science': 'bg-success',
      'Histoire': 'bg-warning text-dark',
      'Informatique': 'bg-info text-dark',
      'Art': 'bg-purple',
      'Autres': 'bg-secondary'
    };
    return classes[category] || 'bg-secondary';
  }
}