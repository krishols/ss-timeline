import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUploadService} from '../file-upload.service';
import {FormControl, FormGroup} from '@angular/forms';
import { TimelineService } from '../timeline.service';
import {OuterSubscriber} from 'rxjs/internal-compatibility';
import {DatesService} from '../dates.service';



@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DatesComponent implements OnInit {
  @Input() numPoints;
  @Output() diffEvent = new EventEmitter<number>();
  @Output() dateRange = new EventEmitter<Array<any>>();
  tlserve: TimelineService = new TimelineService();
  ds: DatesService = new DatesService();
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  onChange(range: FormGroup): void {
    // caclulate and emit number of days between start and end date 
    const diff = this.ds.calcDayRange(range);
    this.diffEvent.emit(diff);
    // calculate and emit start and end dates as Date objects 
    const startEndDates = this.ds.convertToDates(range);
    this.dateRange.emit(startEndDates);
  }
  constructor() { }

  ngOnInit(): void {
    }
  }


