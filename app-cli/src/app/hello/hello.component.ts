import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.Service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

class MyData {
  data: string;
}

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html',
  providers: [MycheckService],
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'wait...';
    setTimeout(() => this.getData(), 5000);

  }

  getData() {
    this.client.get('/assets/data.json')
      .subscribe((result: MyData) => {
        this.message = 'data: ' + result.data;
      });
  }

}
