import { Injectable } from '@angular/core';
import JSZip from 'jszip';
import {DXT} from 'docxtemplater';
import integer = DXT.integer;



@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  public fileString;

  constructor() {
  }

  handleFileInput(event): void {
    this.readFile(event.target.files);
  }

  private readFile(fileList): string {
    // accepts list of files from event
    // returns string of word/document.xml file
    const myFile: File = fileList[0];
    const jsZip = new JSZip();
    let stringText;
    jsZip.loadAsync(myFile).then((zip) => {
      zip.files['word/document.xml'].async('string').then((filetxt) => {
        this.findParts(filetxt);
        stringText = filetxt;
      });
    });
    return stringText;
  }

  private findParts(fileText): string {
    // accepts string of document.xml and locates 'w:t' tags containing text
    // returns string of text contained in document.xml
    const parser = new DOMParser();
    const textDoc = parser.parseFromString(fileText, 'text/xml');
    const textArray = textDoc.getElementsByTagName('w:t');
    let total = '';
    for (let i = 0; i < textArray.length; i++) {
      total += textArray[i].childNodes[0].nodeValue;
    }
    this.findPoints(total);
    return total;
  }

  private findPoints(cleanedText): Array<any> {
    // accepts string of text from document.xml
    // returns array of point values found in document
    let tempArray;
    const resultsArray = [];
    const ptsArray = [];
    const re = new RegExp('\\[.*?\\]', 'g');
    const reNum = new RegExp('\\d+');
    tempArray = re.exec(cleanedText);
    while (tempArray !== null) {
      resultsArray.push(tempArray[0]);
      tempArray = re.exec(cleanedText);
    }
    for (const elem of resultsArray) {
      ptsArray.push(reNum.exec(elem));
    }
    return ptsArray;
  }
}




