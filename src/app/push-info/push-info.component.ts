import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-info',
  templateUrl: './push-info.component.html',
  styleUrls: ['./push-info.component.css']
})
export class PushInfoComponent implements OnInit {
  done = false;
  constructor() { }
  persons = [{
    name: "Simeon Elsa",
    id: 'SSD5F687'
  }, {
    name: "John Doe",
    id: 'SFS8SGD'
  }];
  newPerson: string;
  ngOnInit() {
  }

  success() {
    this.done = true;
  }

  back() {
    this.done = false;
  }
  entry() {
    this.persons.push({ name: this.newPerson, id: this.makeid() });
    this.newPerson = "";
  }

  makeid() {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * 10));
    }
    return result;
  }


}
