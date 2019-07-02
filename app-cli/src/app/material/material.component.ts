import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

export interface People {
  name: string;
  mail: string;
  tel: string;
  age: number;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {
  message: string;
  data: People[];
  sortedData: People[];

  constructor() { }

  ngOnInit() {
    this.data = [
      { name: 'Taro', mail: 'taro@yamada', tel: '090-999-999', age: 35 },
      { name: 'Hanako', mail: 'hanako@flower', tel: '080-888-888', age: 27 },
      { name: 'Sachiko', mail: 'sachico@happy', tel: '070-777-777', age: 49 },
      { name: 'Mami', mail: 'mami@mumemo', tel: '060-666-666', age: 18 },
      { name: 'Jiro', mail: 'jiro@change', tel: '050-555-555', age: 52 },
    ];
    this.sortedData = this.data.slice();
  }

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const asc = sort.direction == 'asc' ? 1 : -1;
      switch (sort.active) {
        case 'name': return (a.name < b.name ? 1 : -1) * asc;
        case 'mail': return (a.mail < b.mail ? 1 : -1) * asc;
        case 'tel': return (a.tel < b.tel ? 1 : -1) * asc;
        case 'age': return (a.age < b.age ? 1 : -1) * asc;
        default: return 0;
      }
    });
  }
}
