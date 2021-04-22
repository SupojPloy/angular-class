import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo01';
  result = "...";

  onPress(event: any) {
    console.log(event.target.value);
    this.result = event.target.value;
  }
}
