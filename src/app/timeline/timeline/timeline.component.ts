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
  }
  onTextChange(event, index){
  setTimeout(() => {if (event != null) {
     let newText = event.target.innerText;
    this.totalDays[index][3] = (newText);
  }}, 2000);
  } 
   ngOnInit(): void {
  }

}
