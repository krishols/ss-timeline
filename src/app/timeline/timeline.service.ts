import {Injectable, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class TimelineService {
  private totalDays;
  calcTL(pts: Array<any>, days: number, range: Array<any>): Array<any> {
    // calls helper functions to calculate data necessary for timeline
    const totalPoints = this.calcTotalPoints(pts);
    let dataArr = this.calcDate(pts, days, range, totalPoints);
    dataArr = this.calcPixels(range, dataArr);
    return dataArr;
  }
  calcTotalPoints(pts: Array<any>): number {
    // calculates total points in assignment given
    let total = 0;
    for (const pt of pts) {
      total += parseInt(pt, 10);
    }
    return total;
  }
  calcDate(pts: Array<any>, days: number, range: Array<any>, total: number): Array<any> {
    // calculates number of days to spend on each part of timeline
    this.totalDays = 0;
    let smallestDay;
    let first = true;
    let index = 0;
    let smallIndex = 0;
    const ptsWeight = [];
    for (const pt of pts) {
      const ptDist = Math.floor((pt / total) * days);
      if (first){
        smallestDay = ptDist;
        first = false;
      }
      ptsWeight.push([ptDist]);
      this.totalDays += ptDist;
      index++;
      if (ptDist < smallestDay) {
        smallestDay = ptDist;
        smallIndex = index;
      }
    }
    if (this.totalDays < days) {
      ptsWeight[smallIndex][0] += 1;
      this.totalDays += 1;
    }
    return ptsWeight;
  }
  calcPixels(range: Array<any>, dataArr: Array<Array<number>>): Array<any> {
    // calculates pixels to use per part of timeline
    let index = 0;
    console.log(this.totalDays, 'total');
    for (let i = 0; i < dataArr.length; i ++) {
      index += (dataArr[i][0]  * 1115) / this.totalDays;
      console.log(index);
      dataArr[i].push(index);
    }
    console.log(dataArr[0], dataArr[1]);
    return dataArr;
  }
  constructor() { }
}
