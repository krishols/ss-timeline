import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { NgxTimepickerFieldComponent } from 'ngx-material-timepicker';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  calcMinutesRange(start: string, end: string): Array<any> {
    // call method to convert start and end to dates that calculations can be performed on
    let startDate = this.parseMinString(start);
    let endDate = this.parseMinString(end);
    // calculate time difference in minutes
    const diff = endDate.getTime() - startDate.getTime();
    const diffInMin = diff / (1000 * 60);
    return [startDate, endDate, diffInMin];
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

  parseMinString(time: string): Date {
    let hours: number; 
    let mins: number;
    // if hour  is one digit
    if (time.length == 7) {
      hours = parseInt(time[0]); 
      mins = parseInt(time.substr(2, 2));
    }
    // if hour is two digits 
    else { 
      hours = parseInt(time.substr(0, 2));
      mins = parseInt(time.substr(3, 2));
    }
    const ap = time.substr((time.length - 2))
    // if time is PM, converts to 24 hour time 
    if (ap == "PM"){
      hours += 12; 
    }
    // create Date from time for calculation 
    let date = new Date(2021, 1, 1, hours, mins);
    if (date)
      return date; 
    else 
      throw new Error("invalid date");
      
  }
  constructor() { }
}
