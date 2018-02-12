import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BooksvService } from '../../booksv.service';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class BookListCompnent {
    showBooks: Observable<any[]>;
    nName = '';
    nDesc = '';
    showUpdate: Boolean;
    constructor (private bl: BooksvService) {
      this.showBooks = this.bl.bookdobs;
      console.log(this.showBooks);
    }
    updateBook(book) {
        this.bl.name = this.nName;
        this.bl.desc = this.nDesc;
        this.bl.update(book);
    }
    deleteBook(book) {
        this.bl.delete(book);
    }
}
