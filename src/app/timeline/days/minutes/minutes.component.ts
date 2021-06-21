import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FileUploadService} from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/file-upload.service";
import {FormControl, FormGroup} from '@angular/forms';
import { TimelineService } from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/timeline.service";
import {OuterSubscriber} from 'rxjs/internal-compatibility';
import {DatesService} from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/dates.service";
import { NgxTimepickerFieldComponent } from 'ngx-material-timepicker';


@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {
  start: NgxTimepickerFieldComponent;
  end: NgxTimepickerFieldComponent;
  @Output() startE = new EventEmitter<NgxTimepickerFieldComponent>();
  @Output()endE = new EventEmitter<NgxTimepickerFieldComponent>();
  ds: DatesService = new DatesService();

  emitValues() {
    //this.startE.emit(this.start); 
   // this.endE.emit(this.end); 
   // console.log(this.start.toString());
    //console.log(this.end.toString());
  if (this.start && this.end) {  
    this.ds.calcMinutesRange(this.start.toString(), this.end.toString()); 
  }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
