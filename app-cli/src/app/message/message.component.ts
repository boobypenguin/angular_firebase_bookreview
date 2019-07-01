import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MycheckService } from '../mycheck.Service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})

export class MessageComponent implements OnInit {
  content: string[];

  constructor(private service: MycheckService) {
    service.push('message data');
  }

  ngOnInit() {
    this.content = this.service.list;
  }
}
