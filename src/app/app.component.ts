import { Component, Optional  } from '@angular/core';
import { TimelineService } from './timeline/timeline.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment Timeline Maker';
  public points: Array<number>;
  public diffDays: number;
  public valid = false;
  public range: FormGroup;
  public daysArray: Array<number>;
  public tlserv: TimelineService = new TimelineService();



constructor() {
}

addDiff(diff: number): void {
  this.diffDays = diff;
}
addPoints(points: Array<any>): void {
  this.points = points;
}
addRange(range: FormGroup): void {
  this.range = range;
}
handleSubmit(): void {
  if (this.diffDays && this.points) {
    this.valid = true;
    this.daysArray = this.tlserv.calcTL(this.points, this.diffDays);
    console.log(this.daysArray.length);
    this.daysArray.push(3);
    //this.daysArray = [-910, -150, 660];
  }
}

ngOnit(): void {
}
}
