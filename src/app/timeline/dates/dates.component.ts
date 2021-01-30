import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUploadService} from '../file-upload.service';
import {FormControl, FormGroup} from '@angular/forms';
import { TimelineService } from '../timeline.service';
import {OuterSubscriber} from 'rxjs/internal-compatibility';
import {DatesService} from '../dates.service';


@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  @Input() numPoints;
  @Output('calcTL') calcTL: EventEmitter<any> = new EventEmitter<any>();
  tlserve: TimelineService = new TimelineService();
  datesserv: DatesService = new DatesService();
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  onChange(range: FormGroup): void {
    const diff = this.datesserv.calcRange(range);
  }
  constructor() { }

  ngOnInit(): void {
    }
  }


