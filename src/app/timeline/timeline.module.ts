import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, ReactiveFormsModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  exports: [TimelineComponent]
})
export class TimelineModule { }
