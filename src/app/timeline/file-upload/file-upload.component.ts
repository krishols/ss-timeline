import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FileUploadService } from '../file-upload.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fus: FileUploadService = new FileUploadService();
  @Output() pointsEvent: EventEmitter<any> = new EventEmitter();
  onChange(event): void {
    const pts = this.fus.handleFileInput(event);
    pts.then(v => this.pointsEvent.emit(v));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
