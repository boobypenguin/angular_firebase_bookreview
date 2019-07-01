import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title: string;
  message: string[];
  lastTarget: any;
  lastColor: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = ['First item.', 'Second item.', 'Third item.'];
  }

  doClick(event) {
    if (this.lastTarget != null) {
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.style.backgroundColor = 'white';
    }
    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
  }

}
