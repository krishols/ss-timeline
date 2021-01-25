import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

/** @title Date range picker forms integration */
@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html'
})
export class TimelineComponent {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}


