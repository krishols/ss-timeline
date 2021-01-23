import { Component, Optional  } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';
import { Inject } from '@angular/core';
import JSZip from 'jszip';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment Timeline Maker';
  public fileString;
  fileUpload: File = null;


constructor(public fus: FileUploadService) {

}
// tslint:disable-next-line:typedef
ngOnit() {
}
}
