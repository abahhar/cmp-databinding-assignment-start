import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

  onNumberClick(event) {
    alert(event.target.innerText + ' is an odd number.');
  }

}
