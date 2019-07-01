import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.Service';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html',
  providers: [MycheckService],
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private service: MycheckService) {
    service.push('hello data');
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = this.service.json;
  }
}
