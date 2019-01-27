import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  ratingArray = [];

  constructor() { }

  ngOnInit() {
    this.ratingArray.length = this.rating;
  }

}
