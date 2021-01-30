import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  calcTL(pts: Array<number>, days: number): void {
      console.log(pts, days);
  }
  constructor() { }
}
