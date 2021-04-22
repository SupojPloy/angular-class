import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  likeCounter = 0;
  likeButtonCss = '';
  likeCounterCss = '';
  dislikeCounter = 0;
  dislikeButtonCss = '';
  dislikeCounterCss = '';

  constructor() { }

  ngOnInit(): void {
    this.likeCounter = 100;
    this.likeButtonCss = 'like-button';
    this.likeCounterCss = 'like-counter';
    this.dislikeCounter = 25;
    this.dislikeButtonCss = 'dislike-button';
    this.dislikeCounterCss = 'dislike-counter';
  }

  toogleLikeCounter(): void {
    console.log();
    if (this.likeButtonCss === 'like-button') {
      this.likeCounter = this.likeCounter + 1;
      this.likeButtonCss = 'like-button liked';
      this.likeCounterCss = 'like-counter liked'
    } else {
      this.likeCounter = this.likeCounter - 1;
      this.likeButtonCss = 'like-button';
      this.likeCounterCss = 'like-counter'
    }
  }

  toogleDislikeCounter(): void {
    if (this.dislikeButtonCss === 'dislike-button') {
      this.dislikeCounter = this.dislikeCounter + 1;
      this.dislikeButtonCss = 'dislike-button disliked';
      this.dislikeCounterCss = 'dislike-counter disliked';
    } else {
      this.dislikeCounter = this.dislikeCounter - 1;
      this.dislikeButtonCss = 'dislike-button';
      this.dislikeCounterCss = 'dislike-counter';
    }
  }
}
