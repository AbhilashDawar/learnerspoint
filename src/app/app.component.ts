import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'vTutorial';
  counter = 0;
  ngAfterViewInit() {
    setTimeout(() => {
      for (let i = 0; i < 100000; i++) {
        setTimeout(() => {
          this.counter = i;
        }, 100)
      }
    }, 1);
  }
}
