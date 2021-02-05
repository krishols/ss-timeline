import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() days: Array<any>;
  @Input() total: number;
  @Input() range: Array<any>;
  @Input() totalDays: Array<any>;
  @Input() pixels: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
