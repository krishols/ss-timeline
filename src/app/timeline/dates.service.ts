import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  calcRange(range: FormGroup): number {
    let startDate = JSON.stringify(range.get('start').value);
    startDate = startDate.substring(1, 20);
    const start = new Date(startDate);
    let endDate = JSON.stringify(range.get('end').value);
    endDate = endDate.substring(1, 20);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    const diffDays = diff / (1000 * 3600 * 24);
    return diffDays;
  }
  constructor() { }
}
