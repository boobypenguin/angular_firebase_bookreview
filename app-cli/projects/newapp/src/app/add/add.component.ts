import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  message: string;
  data: any;
  isbn: string;

  constructor(private store: AngularFirestore,
    private fns: AngularFireFunctions,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.message = 'please input ISBN code!';
    this.data = null;
    this.isbn = '';
  }

  getISBN() {
    this.store.collection('books', ref => ref.where('isbn', '==', this.isbn))
      .valueChanges()
      .subscribe(value => {
        if (value.length == 0) {
          this.data = null;
          this.message = 'can not get data...';
        } else {
          this.data = value[0];
          this.message = 'data found!'
        }
      },
        error => {
          console.log(error);
          this.message = "can't get data...";
          this.data = null;
        });
  }

  add() {
    this.message = 'wait...';
    const call = this.fns.httpsCallable('isbn');
    call({ isbn: this.isbn })
      .subscribe(resp => {
        this.message = "sended! Please wait a few minutes...";
        this.isbn = '';
      }, err => {
        console.error({ err });
      });
  }

}

