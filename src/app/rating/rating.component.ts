import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() ratingClicked: EventEmitter<string>
    = new EventEmitter<string>();

  onClicked(): void {
    console.log('Clicked...');
    this.ratingClicked.emit('Some data at ' + this.targetScore);
  }

}
