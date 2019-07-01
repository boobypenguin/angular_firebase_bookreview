import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Router } from '@angular/router'

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  message: string;

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.message = "bottom sheet.";
  }

  showSheet() {
    this.bottomSheet.open(MysheetComponent);
  }
}

@Component({
  selector: 'app-mysheet',
  template: `
  <h2>Select item</h2>
  <mat-action-list>
    <button mat-list-item 
      (click)="click('')">Top Page</button>
    <button mat-list-item 
      (click)="click('hello')">Hello</button>
    <button mat-list-item 
      (click)="click('msg')">Message</button>
  </mat-action-list>
  `,
})
export class MysheetComponent {

  constructor(private router: Router,
    private bottomSheetRef:
      MatBottomSheetRef<MysheetComponent>) { }

  click(path: string): void {
    this.bottomSheetRef.dismiss();
    this.router.navigate([path]);
  }
}
