import { Component, signal } from '@angular/core';
import { Book } from '../book';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [BookForm, BookList,FormsModule,CommonModule],
  template: `
    <div class="container-fluid">
      <div class="row">
        <!-- Formulaire -->
        <div class="col-md-4">
          <app-book-form 
            [book]="selectedBook()"
            (bookSubmit)="onBookSubmit($event)"
            (cancelEdit)="onCancelEdit()">
          </app-book-form>
        </div>
        
        <!-- Liste -->
        <div class="col-md-8">
          <app-book-list 
            [books]="books()"
            [totalBooks]="books().length"
            (editBook)="onEditBook($event)"
            (deleteBook)="onDeleteBook($event)">
          </app-book-list>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container-fluid {
      padding: 0 15px;
    }
  `]
})
export class BookContainer {
  // Catégories disponibles
  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];
  
  // Liste des livres avec signal
  books = signal<Book[]>([
    new Book(1, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 'contact@editions.com', '12345678', '1943-04-06', 'Roman', true, 15),
    new Book(2, 'Clean Code', 'Robert C. Martin', 'info@techbooks.com', '87654321', '2008-08-01', 'Informatique', true, 8),
    new Book(3, 'Une brève histoire du temps', 'Stephen Hawking', 'science@press.com', '11223344', '1988-01-01', 'Science', false, 0)
  ]);

  // Livre sélectionné pour édition
  selectedBook = signal<Book | null>(null);

  // Soumission d'un livre (ajout ou modification)
  onBookSubmit(bookData: Omit<Book, 'id'>) {
    if (this.selectedBook()) {
      // Mode édition
      const updatedBooks = this.books().map(book => 
        book.id === this.selectedBook()!.id 
          ? { ...bookData, id: this.selectedBook()!.id }
          : book
      );
      this.books.set(updatedBooks);
    } else {
      // Mode ajout
      const newId = Math.max(...this.books().map(b => b.id), 0) + 1;
      const newBook = new Book(
        newId,
        bookData.title,
        bookData.author,
        bookData.publisherEmail,
        bookData.publisherPhone,
        bookData.releaseDate,
        bookData.category,
        bookData.isAvailable,
        bookData.stock
      );
      this.books.update(current => [...current, newBook]);
    }
    this.selectedBook.set(null);
  }

  // Édition d'un livre
  onEditBook(book: Book) {
    this.selectedBook.set(book);
  }

  // Suppression d'un livre
  onDeleteBook(id: number) {
    this.books.update(books => books.filter(book => book.id !== id));
  }

  // Annulation de l'édition
  onCancelEdit() {
    this.selectedBook.set(null);
  }
}