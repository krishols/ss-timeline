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
  public height: number;
  public width: number;
  public range: Array<any>;
  public daysArray: Array<any>;
  public partDaysArray: Array<any>;
  public tldays: Array<any>;
  public tlserv: TimelineService = new TimelineService();



constructor() {
  this.height = window.innerHeight;
  this.width = window.innerWidth;
  //console.log(this.height);
  console.log(this.width);
}

addDiff(diff: number): void {
  this.diffDays = diff;
}
addPoints(points: Array<any>): void {
  this.points = points;
}
addRange(range: Array<any>): void {
  this.range = range;

}
handleSubmit(): void {
  if (this.diffDays && this.points) {
    this.valid = true;
    this.partDaysArray = this.tlserv.calcTL(this.points, this.diffDays, this.range, this.height, this.width);
    this.tldays = this.tlserv.createTLdates(this.range);
    this.tldays = this.tlserv.createLabels(this.tldays, this.partDaysArray);
    console.log(this.tldays);
   
  }
}

ngOnit(): void {
}
}
