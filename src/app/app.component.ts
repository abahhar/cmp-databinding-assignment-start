import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  public onIncrement(event) {
    if (event.count % 2 === 0) { // If even number

      this.evenNumbers.push(event.count);

    } else { // Else odd number

      this.oddNumbers.push(event.count);

    }
  }

}
