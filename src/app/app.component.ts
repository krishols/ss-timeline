import { Component, Optional  } from '@angular/core';
import { TimelineService } from './timeline/timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment Timeline Maker';
  public points: Array<number>;
  public diffDays: number;
  public tlserv: TimelineService = new TimelineService();



constructor() {
}

addDiff(diff: number): void {
  this.diffDays = diff;
  console.log('diff: ', this.diffDays);
}
addPoints(points: Array<any>): void {
  this.points = points;
  console.log('points: ', this.points);
}
handleSubmit(): void {
   this.tlserv.calcTL(this.points, this.diffDays);
}

ngOnit(): void {
}
}
