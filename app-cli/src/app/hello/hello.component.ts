import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.Service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html',
  providers: [MycheckService],
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'params: ' +
      JSON.stringify(this.route.snapshot.queryParamMap);
  }

}
