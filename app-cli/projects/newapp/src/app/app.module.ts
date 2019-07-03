import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'show/:isbn', component: ShowComponent },
  { path: 'add', component: AddComponent },
];

const fire_config = {
  apiKey: "AIzaSyC-5QuzovDqD6iS8-Yqyl3bu2gShVzy0cg",
  authDomain: "boobypenguin-angular-app.firebaseapp.com",
  databaseURL: "https://boobypenguin-angular-app.firebaseio.com",
  projectId: "boobypenguin-angular-app",
  storageBucket: "boobypenguin-angular-app.appspot.com",
  messagingSenderId: "175259266858",
  appId: "1:175259266858:web:0207ac956c619d95"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(fire_config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'us-central1' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
