import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
    selector: 'app-book-add',
    templateUrl: './book-add.component.html',
    styleUrls: ['./book-add.component.css']
})

export class BookAddComponent {
    bookTitle: string;
    bookPageCount?: number;
    bookDesc?: string;

    bookCollection: AngularFirestoreCollection<any> = this.afs.collection('demobook');
    bookDobs = this.bookCollection.valueChanges();
    constructor (private afs: AngularFirestore) {}
    addBook() {
        // console.log("value input",this.booktitlee, this.bookpagecount,this.bookdesc)
        this.bookCollection.add({
            name: this.bookTitle,
            pagecount: this.bookPageCount,
            desc: this.bookDesc
        }).then((docRef) => {
            this.bookCollection.doc(docRef.id).update({
                bookid: docRef.id
            });
        }).catch((er) => {
            console.log(er);
        });
    }
}
