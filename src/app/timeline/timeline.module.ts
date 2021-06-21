import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { DatesComponent} from './days/days.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TimelineComponent } from './timeline-days/timeline.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [DatesComponent, FileUploadComponent, TimelineComponent],
  imports: [
    CommonModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, ReactiveFormsModule, DragDropModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  exports: [DatesComponent, FileUploadComponent, TimelineComponent]
})
export class TimelineModule { }
