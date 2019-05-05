import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-info',
  templateUrl: './push-info.component.html',
  styleUrls: ['./push-info.component.css']
})
export class PushInfoComponent implements OnInit {
  done = false;
  constructor() { }

  ngOnInit() {
  }

  success() {
    this.done = true;
  }

  back() {
    this.done = false;
  }

}
