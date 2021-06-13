import {Injectable, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import 'src/app/custom-methods/custom-methods.module';


@Injectable({
  providedIn: 'root'
})

export class TimelineService {
  private totalDays;
  private height: number; // user screen height
  private width: number; // user screen width 
  calcTL(pts: Array<any>, days: number, range: Array<any>, height: number, width: number): Array<any> {
    // calls helper functions to calculate data necessary for timeline
    const totalPoints = this.calcTotalPoints(pts);
    this.height = height;
    this.width = width;
    return this.calcDate(pts, days, range, totalPoints);
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
    let ptsWeight = [];
    for (const pt of pts) {
      const ptDist = Math.floor((pt / total) * days);
      if (first){
        smallestDay = ptDist;
        first = false;
      }
      this.totalDays += ptDist;
      ptsWeight.push(this.totalDays);
      index++;
      if (ptDist < smallestDay) {
        smallestDay = ptDist;
        smallIndex = index;
      }
    }
    if (this.totalDays < days) {
      ptsWeight[smallIndex] += days - this.totalDays;
      ptsWeight[ptsWeight.length - 1] += days - this.totalDays;
      this.totalDays += days - this.totalDays;
    }
    // ptsWeight.push(ptsWeight[ptsWeight.length -1] -1)
    ptsWeight = ptsWeight.sort(function(a,b) {
      return a - b;
    });
    return ptsWeight;
  }

   createLabels(daysArray: Array<any>, pointsArray: Array<any>): Array<any> {
      let index = 0;
      for (const day of daysArray) {
        if (pointsArray[index] === day[0]) {
          const temp = index + 1;
          const label = 'Finish Part ' + temp;
          day.push(label);
          index += 1;
        }
      }
      daysArray[daysArray.length - 1][3] = 'Finish Part '+ (index) +  ', Assignment due';
      return daysArray;
   }
  calcPixels(range: Array<any>, dataArr: Array<Array<number>>): Array<any> {
    // calculates pixels to use per part of timeline
    let index = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < dataArr.length; i ++) {
      index += (dataArr[i][0]  * this.width) / this.totalDays;
      dataArr[i].push(index);
    }
    console.log("data array");
    console.log(dataArr);
    return dataArr;
  }
  addDates(range: Array<any>, dataArr: Array<Array<any>>): Array<any> {
    // adds date to complete to each part of assignment
    let index = 0;
    for (const part of dataArr){
      index += part[0];
      let tempDate = new Date();
      tempDate = tempDate.addDays(range, index);
      part.push(tempDate.toDateString().substring(0, 10));
    }
    return dataArr;
  }
  createTLdates(range: Array<any>): Array<any> {
    let dates = [];
    dates.push([0, range[0].toDateString().substring(0, 10)]);
    for (let i = 1; i < this.totalDays; i ++) {
      let tempDate = new Date();
      tempDate = tempDate.addDays(range, i);
      dates.push([i, tempDate.toDateString().substring(0, 10)]);
    }
    dates.push([this.totalDays, range[1].toDateString().substring(0, 10)]);
    dates = this.calcTLPixels(range, dates);
    return dates;
  }
  calcTLPixels(range: Array<any>, dates: Array<any>): Array<any> {
    const incre = (this.width - (this.width/8)) / this.totalDays;
    for (let i = 0; i <= this.totalDays; i ++) {
      dates[i].push(i * incre);
    }
    return dates;
  }
  constructor() { }
}
