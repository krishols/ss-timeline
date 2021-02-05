import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export {};
declare global {
  interface Date {
    addDays(range: Array<any>, days: number): Date;
  }
}
Date.prototype.addDays = function(range: Array<any>, days: number) {
    const date = new Date(range[0].valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

