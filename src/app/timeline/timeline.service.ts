import {Injectable, Output, EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TimelineService {
  calcTL(pts: Array<any>, days: number): Array<any> {
    let total = 0;
    let totalDays = 0;
    let smallestDay;
    let first = true;
    let index = 0;
    let smallIndex = 0;
    const ptsWeight = [];
    for (const pt of pts) {
        total +=  parseInt(pt, 10);
      }
    for (const pt of pts) {
      const ptDist = Math.floor((pt / total) * days);
      if (first){
        smallestDay = ptDist;
        first = false;
      }
      ptsWeight.push(ptDist);
      totalDays += ptDist;
      index++;
      if (ptDist < smallestDay) {
        smallestDay = ptDist;
        smallIndex = index;
      }
    }
    if (totalDays < days) {
      ptsWeight[smallIndex] += 1;
    }
    return ptsWeight;
  }
  constructor() { }
}
