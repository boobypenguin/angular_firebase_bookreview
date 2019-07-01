import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {
  message: string;
  myControl: FormGroup;

  constructor() { }

  ngOnInit() {
    this.message = 'please select button.';
    this.myControl = new FormGroup({
      picker1: new FormControl(new Date()),
    });
  }

  click() {
    this.message = JSON.stringify(this.myControl.value);
  }

}
