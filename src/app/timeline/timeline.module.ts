import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { DatesComponent} from './dates/dates.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [DatesComponent, FileUploadComponent],
  imports: [
    CommonModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, ReactiveFormsModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  exports: [DatesComponent, FileUploadComponent]
})
export class TimelineModule { }
