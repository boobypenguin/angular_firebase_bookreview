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


  get currentUser() {
    return this.afAuth.auth != null ?
      this.afAuth.auth.currentUser != null ?
        this.afAuth.auth.currentUser.displayName :
        '(not logined.)' :
      '(not logined.)';
  }
}
