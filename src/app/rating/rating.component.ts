import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() targetScore: number = 0;
  starWidth = 0;

  constructor() { }

  ngOnInit(): void {
    this.starWidth = this.targetScore * 75 / 5;
  }

}
