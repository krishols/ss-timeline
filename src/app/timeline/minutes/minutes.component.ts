import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FileUploadService} from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/file-upload.service";
import {FormControl, FormGroup} from '@angular/forms';
import { TimelineService } from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/timeline.service";
import {OuterSubscriber} from 'rxjs/internal-compatibility';
import {DatesService} from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/dates.service";
import { NgxTimepickerFieldComponent } from 'ngx-material-timepicker';
import { start } from 'repl';


@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit, DoCheck {
  start: NgxTimepickerFieldComponent;
  end: NgxTimepickerFieldComponent;
  oldStart: NgxTimepickerFieldComponent;
  oldEnd: NgxTimepickerFieldComponent;
  @Output() startDate = new EventEmitter<Date>();
  @Output()endDate = new EventEmitter<Date>();
  @Output() diff = new EventEmitter<number>();
  ds: DatesService = new DatesService();

  constructor() { }

  ngDoCheck(): void {
    // if start and end are defined
    if (this.start && this.end) {
      // if they have changed since last update
      if (this.oldStart != this.start || this.oldEnd != this.end) { 
        // calculate data 
        let dataArr = this.ds.calcMinutesRange(this.start.toString(), this.end.toString());
        // update values 
        this.oldStart = this.start;
        this.oldEnd = this.end; 
        //  emit start time and end time as Date for future maniputlation
        this.startDate.emit(dataArr[0]);
        this.endDate.emit(dataArr[1]);
        // emit difference between end and start time in minutes 
        this.diff.emit(dataArr[2]); 
      }
    }
  }

  ngOnInit(): void {
    this.oldStart = this.start;
    this.oldEnd = this.end; 

  }

}
