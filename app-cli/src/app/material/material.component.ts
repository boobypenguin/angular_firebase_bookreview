import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {
  message: string

  constructor() { }

  ngOnInit() {
    this.message = 'please select button.';
  }

  change(v) {
    this.message = 'select: "' + v + '".';
  }

}
