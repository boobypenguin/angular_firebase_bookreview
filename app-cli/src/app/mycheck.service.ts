import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

class MyData {
  data: string = '';
  list: Person[] = [];
}
class Person {
  name: string;
  mail: string;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})

export class MycheckService {
  private mydata;

  constructor(private client: HttpClient) {
    this.updateData(true);
    this.mydata = new MyData();
  }

  updateData(f: boolean) {
    this.client.get('/assets/data.json')
      .pipe(
        map((res: Response) => {
          return f ? res : null;
        })
      )
      .subscribe((result) => {
        if (result != null) {
          this.mydata = result;
        } else {
          this.mydata = new MyData();
        }
      });
  }

  get(n: number) {
    return this.mydata.list[n];
  }

  get size() {
    return this.list.length;
  }

  get list() {
    return this.mydata.list
      .filter((v, k) => {
        return k % 2 == 0 ? true : false;
      });
  }

  get data() {
    return this.mydata.data;
  }
}
