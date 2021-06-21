import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { NgxTimepickerFieldComponent } from 'ngx-material-timepicker';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  calcMinutesRange(start: string, end: string): number {
    console.log(start.length); // 7 
    console.log(end.length);  // 8 
    //TODO: call parseMinString on both start and end 
    return 3;
  }

  calcDayRange(range: FormGroup): number {
    const dates = this.convertToDates(range);
    const diff = dates[1].getTime() - dates[0].getTime();
    const diffDays = diff / (1000 * 3600 * 24);
    return diffDays;
  }
  convertToDates(range: FormGroup): Array<any> {
    let startDate = JSON.stringify(range.get('start').value);
    startDate = startDate.substring(1, 20);
    const start = new Date(startDate);
    let endDate = JSON.stringify(range.get('end').value);
    endDate = endDate.substring(1, 20);
    const end = new Date(endDate);
    return [start, end];
  }

  parseMinString(mins: string) {
    if (mins.length == 7) {
      // is such as 7:00 
    }
    else { 
      // is such as 10:00 
    }
  }
  constructor() { }
}
