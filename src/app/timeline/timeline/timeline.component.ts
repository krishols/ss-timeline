import {Component, Input, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() parts: Array<any>;
  @Input() total: number;
  @Input() range: Array<any>;
  @Input() totalDays: Array<any>;
  @Input() pixels: Array<any>;
  @Input() height: number;
  @Input() width: number;
  constructor() { }
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
  onClick(): void {
    const index = this.totalDays.length - 2;
    const partData = this.parts[this.parts.length - 1] - 1;
    this.parts.splice((this.parts.length - 1), 0, partData);
    this.totalDays[index][3] = ('New Section');
    console.log(this.totalDays);
  
  }

  setWidth() {
    const localWidth = this.totalDays[1][2] / 2;
    console.log("local width", localWidth);
    console.log('width', this.width);
    const localLeftNum = -(localWidth / 2);
    console.log(localLeftNum);
    // const localLeft = localLeftNum.toString() + 'px';
    return {
      'width': localWidth,
      'left': localLeftNum
    };
  }
   ngOnInit(): void {
  }

}
