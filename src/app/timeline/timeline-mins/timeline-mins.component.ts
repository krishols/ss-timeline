import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-mins',
  templateUrl: './timeline-mins.component.html',
  styleUrls: ['./timeline-mins.component.css']
})
export class TimelineMinsComponent implements OnInit {
  @Input() parts: Array<any>;
  @Input() total: number;
  @Input() range: Array<any>;
  @Input() totalDays: Array<any>;
  @Input() pixels: Array<any>;
  @Input() height: number;
  @Input() width: number; 
  public start: string;
  public end; string; 
  constructor() { 
  }
  // handles drag and drop of dates on timeline 
  drop(event: CdkDragDrop<Array<any>>): void {
    for (let i = 0; i < this.parts.length; i ++) {
      // @ts-ignore
      if (this.totalDays[event.previousContainer.data][0] === this.parts[i]) {
        // @ts-ignore
        this.parts[i] = this.totalDays[event.container.data][0];
        // @ts-ignore
        this.totalDays[event.container.data][3] = this.totalDays[event.previousContainer.data][3];
        // @ts-ignore
        this.totalDays[event.previousContainer.data][3] = null;
      }
    }
  }
  
  //create new timeline label, called when button is clicked 
  onClick(): void {
    // calcluate offsets
    const index = this.totalDays.length - 2;
    const partData = this.parts[this.parts.length - 1] - 1;
    // add to parts and totalDays 
    this.parts.splice((this.parts.length - 1), 0, partData);
    this.totalDays[index][3] = ('New Section');
  }

  verifyTime(time: string): string {
    if (parseInt(time.substring(0, 2)) > 12) {
      let temp = time.substring(2); 
      time = (parseInt(time.substring(0, 2)) - 12) + temp + " PM"; 
    }
    else {
      time = time.substring(0, 5) + " AM";
    }
    return time;
  }
  ngOnInit(): void {
    this.start = this.range[0].toTimeString();
    this.end = this.range[1].toTimeString();
    this.start = this.verifyTime(this.start); 
    this.end = this.verifyTime(this.end);
    this.total = this.totalDays.length;
    console.log(this.total)
    console.log("^total")
    console.log(this.totalDays);
  }

}
