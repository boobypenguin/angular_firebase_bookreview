import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MycheckService } from './mycheck.Service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'msg', component: MessageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // ★
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() { }

}
