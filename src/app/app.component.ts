import { Component, Optional  } from '@angular/core';
import { FileUploadService } from 'src/app/timeline/file-upload.service';
import { TimelineService } from './timeline/timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment Timeline Maker';
  public fileString;
  public points;
  public diffDays: number;
  fileUpload: File = null;


constructor() {
}

addDiff(diff: number): void {
  this.diffDays = diff;
  console.log('diff: ', this.diffDays);
}
addPoints(points: Array<any>): void {
  this.points = points;
  console.log('points: ', this.points);
}
handleSubmit(): void {

}

ngOnit(): void {
}
}
