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
  fileUpload: File = null;


constructor(public fus: FileUploadService, public tlserve: TimelineService) {
  this.points = fus.ptsArray;
}
calcTL(): void {
  console.log("out");
}
ngOnit(): void {
}
}
