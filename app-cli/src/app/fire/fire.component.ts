import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})

export class FireComponent implements OnInit {
  message: string = 'people data.';
  data: any;
  name: string;
  mail: string;
  age: number;

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.access();
  }

  access() {
    this.db.collection('people')
      .valueChanges()
      .subscribe(value => {
        this.data = value;
      },
        error => {
          this.message = "(can't get data...)";
          this.data = null;
        });
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(provider)
      .then((result) => {
        this.access();
      });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.access();
  }

  add() {
    const data = { name: this.name, mail: this.mail, age: this.age };
    this.db.collection('people').add(data);
    this.name = '';
    this.mail = '';
    this.age = 0;
  }

  get currentUser() {
    return this.afAuth.auth != null ?
      this.afAuth.auth.currentUser != null ?
        this.afAuth.auth.currentUser.displayName :
        '(not logined.)' :
      '(not logined.)';
  }

  find(val) {
    this.db.collection('people',
      ref => ref.where('name', '==', val))
      .valueChanges()
      .subscribe(value => {
        this.data = value;
      },
        error => {
          this.message = "(can't get data...)";
          this.data = null;
        });
  }

}
