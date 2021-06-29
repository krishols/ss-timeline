import {Injectable, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import 'src/app/custom-methods/custom-methods.module';


@Injectable({
  providedIn: 'root'
})

export class TimelineService {
  private totalDays;
  private totalMinIncre; 
  private incre;
  // total number of increments minutes are broken down into 
  private height: number; // user screen height
  private width: number; // user screen width 
  // calls helper functions to calculate data necessary for days/weeks timeline
  calcDaysTL(pts: Array<any>, days: number, range: Array<any>, height: number, width: number): Array<any> {
    // calls to calculate total number of points in assignment
    const totalPoints = this.calcTotalPoints(pts);
    this.height = height;
    this.width = width;
    return this.calcWeight(pts, days, totalPoints);
  }

  calcTotalPoints(pts: Array<any>): number {
    // calculates total points in assignment given
    let total = 0;
    for (const pt of pts) {
      total += parseInt(pt, 10);
    }
    return total;
  }
  calcWeight(pts: Array<any>, days: number, total: number): Array<any> {
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
   // console.log(ptsWeight);
    return ptsWeight;
  }


  calcMinsTL(pts: Array<any>, totalMins: number, width: number): Array<any> {
    const totalPoints = this.calcTotalPoints(pts);
    this.width = width;
    // calculates increment of minutes timeline will be broken down into - 5 or 10 minutes 
   // if total minutes of assignment is less than 45 it is broken down by increments of 5 
    if (totalMins < 45) {
      this.totalMinIncre = Math.ceil(totalMins / 5);
      this.incre = 5; 
    }
    // if total minutes of assignments is more than 45 it is broken down by increments of 10
    else {
      this.totalMinIncre = Math.ceil(totalMins/10);
      this.incre = 10; 
    }
    return this.calcWeight(pts, this.totalMinIncre, totalPoints); 
    
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
  createTLdays(range: Array<any>): Array<any> {
    let dates = [];
    // create first element in array, starting day 
    dates.push([0, range[0].toDateString().substring(0, 10)]);
    // create every additional index and date in array 
    for (let i = 1; i < this.totalDays; i ++) {
      let tempDate = new Date();
      tempDate = tempDate.addDays(range, i);
      dates.push([i, tempDate.toDateString().substring(0, 10)]);
    }
    // create final day 
    dates.push([this.totalDays, range[1].toDateString().substring(0, 10)]);
    // call helper function to calculate pixels per day 
    dates = this.calcDayPixels(dates);
    // return Array of Arrays, each Array of type [index: number, date: string, pixels: number] 
    return dates;
  }

  calcDayPixels(dates: Array<any>): Array<any> {
    const incre = (this.width - (this.width/8)) / this.totalDays;
    for (let i = 0; i <= this.totalDays; i ++) {
      dates[i].push(i * incre);
    }
    return dates;
  }

  createTLmins(min: number): Array<any> {
      let mins = []; 
      let incre = 0;
      // create every index and time increment in the array 
      for (let i = 0; i <= this.totalMinIncre; i++) {
        mins.push([i, incre]); 
        incre += this.incre; 
      }
      // all helper function to calculate pixels per mins 
      mins = this.calcMinPixels(mins);
      // return Array of Arrays, each Array of type [index: number, minutes increment: number, pixels: number] 
      return mins; 
  }

  calcMinPixels(mins: Array<any>) {
    const incre = (this.width - (this.width / 8)) / this.totalMinIncre;
    for (let i = 0; i <= this.totalMinIncre; i ++) {
      mins[i].push(i * incre);
    }
     return mins;
  }


  constructor() { }
}
