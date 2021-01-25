import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TimelineModule} from './timeline/timeline.module';
import { AppComponent } from './app.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TimelineModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
