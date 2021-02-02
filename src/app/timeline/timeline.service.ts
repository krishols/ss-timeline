import {Injectable, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class TimelineService {
  calcTL(pts: Array<any>, days: number, range: FormGroup): Array<any> {
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
      const temp = [];
      temp.push(ptDist);
      ptsWeight.push(temp);
      totalDays += ptDist;
      index++;
      if (ptDist < smallestDay) {
        smallestDay = ptDist;
        smallIndex = index;
      }
    }
    if (totalDays < days) {
      ptsWeight[smallIndex][0] += 1;
    }
    return this.calcDates(range, ptsWeight);
  }
  calcDates(range: FormGroup, dataArr: Array<Array<number>>): Array<any> {
    let total = 0;
    for (let i = 0; i < dataArr.length; i ++) {
      total += dataArr[i][0];
    }
    let index = 0;
    for (let i = 0; i < dataArr.length; i ++) {
      index += (dataArr[i][0] / total) * 1118;
      console.log(index);
      dataArr[i].push(index);
    }
    return dataArr;
  }
  constructor() { }
}
