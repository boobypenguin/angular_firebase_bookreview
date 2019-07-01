import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// 半角アルファベットのみ入力を許可
function alpha(c: FormControl) {
  let REGPATTERN = /^[a-zA-Z]+$/;
  if (REGPATTERN.test(c.value)) {
    return null;
  } else {
    return { alpha: { valid: false } };
  };
}

// 偶数のみ入力を許可
function even(c: FormControl) {
  return c.value % 2 == 0 ? null : { even: { valid: false } };
}

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormGroup;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'FormControlを使う';
    this.myControl = new FormGroup({
      name: new FormControl('', [Validators.required, alpha]),
      mail: new FormControl('', [Validators.email]),
      age: new FormControl(0, [Validators.min(1), Validators.max(150), even])
    });
  }

  get name() { return this.myControl.get('name'); }
  get mail() { return this.myControl.get('mail'); }
  get age() { return this.myControl.get('age'); }

  error(item: FormControl) {
    return JSON.stringify(item.errors);
  }

  onSubmit() {
    if (this.myControl.invalid) {
      this.message = 'VALIDATION ERROR.';
    } else {
      let result = this.myControl.value;
      this.message = JSON.stringify(result);
    }
  }

}
