import { Component, Optional  } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment Timeline Maker';
  public fileString;
  public fus: FileUploadService;
  fileUpload: File = null;


constructor() {

}
// tslint:disable-next-line:typedef
ngOnit() {
}
}
