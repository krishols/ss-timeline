import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-minutes',
  templateUrl: './timeline-minutes.component.html',
  styleUrls: ['./timeline-minutes.component.css']
})
export class TimelineMinutesComponent implements OnInit {
  @Input() parts: Array<any>;
  @Input() total: number;
  @Input() range: Array<any>;
  @Input() totalDays: Array<any>;
  @Input() pixels: Array<any>;
  @Input() height: number;
  @Input() width: number;
  constructor() { }
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
  ngOnInit(): void {
  }

}
