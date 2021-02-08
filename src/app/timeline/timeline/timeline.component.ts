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
    moveItemInArray(this.totalDays, event.previousIndex, event.currentIndex);

    const temp = event.currentIndex;
    console.log(this.totalDays[event.previousIndex][2]);
    // this.totalDays[event.previousIndex][2] += event.distance.x;
    console.log(event.currentIndex);
    console.log(event.previousIndex);
    console.log(event);
  }
  ngOnInit(): void {
  }

}
