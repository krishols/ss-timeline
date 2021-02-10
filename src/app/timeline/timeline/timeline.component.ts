import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


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
    const temp = this.totalDays[event.currentIndex];
    console.log(event);
    console.log(this.parts);
    for (let i = 0; i < this.parts.length; i ++) {
      if (this.parts[i] === this.totalDays[event.previousIndex -1][0]) {
        this.parts[i] = this.totalDays[event.currentIndex][0];
      }
      i = this.parts.length + 1;
    }
    console.log(this.totalDays);
  }
  ngOnInit(): void {
  }

}
