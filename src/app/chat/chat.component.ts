import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('message') redel: ElementRef;

  messagesCollection: AngularFirestoreCollection<any>;
  messages: Observable<any[]>;
  constructor(public afs: AngularFirestore) { }

  ngOnInit() {

    this.getChatData();

  }
  newMessage(message) {
    this.messagesCollection.add({
      mess: message,
      date: Date()
    }).catch((err) => {
      console.log(err);
    });
    this.redel.nativeElement.value = '';
  }
  getChatData() {
    this.messagesCollection = this.afs.collection<any>('chat_messages' , s => s.orderBy('date'));
    this.messages = this.messagesCollection.valueChanges();
  }



}
