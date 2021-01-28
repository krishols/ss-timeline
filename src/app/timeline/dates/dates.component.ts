import {Component, Input, OnInit} from '@angular/core';
import {FileUploadService} from '../../file-upload.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  calcRange(): void {
    let startDate = JSON.stringify(this.range.get('start').value);
    startDate = startDate.substring(1, 20);
    const start = new Date(startDate);
    let endDate = JSON.stringify(this.range.get('end').value);
    endDate = endDate.substring(1, 20);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    const diffDays = diff / (1000 * 3600 * 24);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
