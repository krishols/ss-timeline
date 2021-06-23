import { Component, Optional, SystemJsNgModuleLoader  } from '@angular/core';
import { TimelineService } from './timeline/timeline.service';
import {FormGroup} from '@angular/forms';
import { ExecOptionsWithStringEncoding } from 'child_process';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment Timeline Maker';
  public points: Array<number>;
  public diffDays: number;
  public validDays = false;
  public height: number;
  public width: number;
  public range: Array<any>;
  public daysArray: Array<any>;
  public partDaysArray: Array<any>;
  public tldays: Array<any>;
  // tldays format: Array of Arrays, each array is [index, date, pixel, (optional) label message]
  public tlserv: TimelineService = new TimelineService();
  public units: string; 

  public start: Date; 
  public end: Date;
  public minRange: number;
  public validMins = false; 
  public partMinsArray: Array<any>;
  public tlmins: Array<any>; 
  // tlmins format: Array of Arrays, each array is [index, mins, pixel, (optional) label message]



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

addStart(start: Date) {
  this.start = start;
}

addMinRange(minRange: number) {
  this.minRange = minRange;
}

addEnd(end: Date) {
  this.end = end;
}
handleSubmit(): void {
  // if user has selected days/weeks as unit of time and file is valid 
  if (this.diffDays && this.points && this.units == "days") {
    this.validDays = true;
    this.partDaysArray = this.tlserv.calcDaysTL(this.points, this.diffDays, this.range, this.height, this.width);
    this.tldays = this.tlserv.createTLdays(this.range);
    this.tldays = this.tlserv.createLabels(this.tldays, this.partDaysArray);
    //console.log(this.tldays);
   
  }
  // if user has selected minutes/hours as unit of time and file is valid 
  else if (this.minRange && this.points && this.units == "minutes") {
    // console.log(this.minRange);
     this.validMins = true;
     this.partMinsArray = this.tlserv.calcMinsTL(this.points, this.minRange, this.width); 
     console.log(this.partMinsArray);
     this.tlmins = this.tlserv.createTLmins(this.minRange); 
     this.tlmins = this.tlserv.createLabels(this.tlmins, this.partMinsArray); 
     this.range = [this.start, this.end]; 
     console.log(this.tlmins);
     //
  }
}

ngOnit(): void {
}
}
