import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() days: Array<any>;
  @Input() total: number;
  constructor() { }

  ngOnInit(): void {
  }

}
