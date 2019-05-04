import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  isDeleted = false;
  constructor(public elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  delete() {
    this.isDeleted = true;
  }

}
