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

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'msg/:id', component: MessageComponent },
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // デバッグ用
    )
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() { }

}
