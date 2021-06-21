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
  datesserv: DatesService = new DatesService();
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  onChange(range: FormGroup): void {
    const diff = this.datesserv.calcDayRange(range);
    this.diffEvent.emit(diff);
    const startEndDates = this.datesserv.convertToDates(range);
    this.dateRange.emit(startEndDates);
  }
  constructor() { }

  ngOnInit(): void {
    }
  }


