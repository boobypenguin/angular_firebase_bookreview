import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title:string;
  message:string;
  nowStyle:any;
  
  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'false,false,false';
    this.nowStyle = {
      'border-style':'',
      'border-width':'',
      'border-color':''
    };
  }

  check(in1, in2, in3) {
    this.nowStyle['border-style'] = in1;
    this.nowStyle['border-width'] = in2 + "px";
    this.nowStyle['border-color'] = in3;
    this.message = JSON.stringify(this.nowStyle);
  }
}
