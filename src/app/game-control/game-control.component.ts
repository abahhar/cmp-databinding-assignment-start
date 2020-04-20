import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() increment: EventEmitter<{count: number}> = new EventEmitter();
  counter: any;
  count: number;
  isStarted: boolean;

  constructor() { }

  ngOnInit() {
    this.count = 0;
    this.isStarted = false;
  }

  public onStart() {
    if (this.counter !== undefined) {
      return;
    }

    this.counter = setInterval(
      () => {
        this.count++;
        this.increment.emit({count: this.count});
      },
      1000
    );

    this.isStarted = true;
  }

  public onStop() {
    clearInterval(this.counter);
    this.counter = undefined;
  }

}
