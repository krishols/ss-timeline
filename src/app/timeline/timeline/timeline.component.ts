import {Component, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {stringify} from 'querystring';
import {FileUploadService} from '../../file-upload.service';

/** @title Date range picker forms integration */
@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.css']
})
export class TimelineComponent {
  @Input('points') numPoints;
}


