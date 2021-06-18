import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUploadService} from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/file-upload.service";
import {FormControl, FormGroup} from '@angular/forms';
import { TimelineService } from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/timeline.service";
import {OuterSubscriber} from 'rxjs/internal-compatibility';
import {DatesService} from "/Users/kristinaholsapple/Documents/CISC/ss-research/exec-plan-program/src/app/timeline/dates.service";

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
